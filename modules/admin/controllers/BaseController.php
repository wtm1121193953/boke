<?php
/**
 * Created by PhpStorm.
 * User: 13148872522
 * Date: 2019/4/24
 * Time: 11:41
 */

namespace app\modules\admin\controllers;

use Egulias\EmailValidator\Warning\EmailTooLong;
use Yii;
use yii\base\ErrorException;
use yii\web\Controller;
use app\commands\code\ErrorCode;
use yii\base\Exception;


class BaseController extends Controller
{

    protected $errCode = 0;

    protected $errMsg = '';

    protected $modelClass = '';

    protected $viewFile = null;

    protected $model = null;


    public function init()
    {

        if ($this->modelClass) {
            if (!class_exists($this->modelClass)) {
                throw new Exception('model not exists ' . $this->modelClass);
            }
            $this->model = new $this->modelClass;
        }

        parent::init();
    }

    /**
     * 获取get参数
     * @param string $key
     * @return array|mixed
     */
    protected function get($key = '')
    {
        return $key ? Yii::$app->request->get($key) : Yii::$app->request->get();
    }


    /**
     * 获取post参数
     * @param string $key
     * @return array|mixed
     */
    protected function post($key = '')
    {
        return $key ? Yii::$app->request->post($key) : Yii::$app->request->post();
    }

    /**
     * 是否为post请求
     * @return bool|mixed
     */
    protected function isPost()
    {
        return Yii::$app->request->isPost;
    }

    /**
     * 是否为ajax请求
     * @return bool|mixed
     */
    protected function isAjax()
    {
        return Yii::$app->request->isAjax;
    }


    /**
     * 应答
     * @param array $data
     * @return array
     */
    protected function response($data = [])
    {

        Yii::$app->response->format = Yii\web\Response::FORMAT_JSON;
        if ($this->errCode) {
            return ['errCode' => $this->errCode, 'errMsg' => $this->errMsg, 'data' => $data];
        } elseif (!empty($this->model)) {
            return ['errCode' => $this->model->getErrCorde(), 'errMsg' => $this->model->getErrMsg(), 'data' => $data];
        } else {
            return ['errCode' => 0, 'errMsg' => '', 'data' => $data];
        }
    }


    protected function display($viewFile = '')
    {
        if ($viewFile) {
            $file = ltrim($viewFile, DIRECTORY_SEPARATOR);
        } else {
            $file = ltrim($this->viewFile, DIRECTORY_SEPARATOR);
        }
        Yii::$app->viewPath = dirname(Yii::$app->viewPath, 1) . DIRECTORY_SEPARATOR . 'web' . DIRECTORY_SEPARATOR;
        $file = Yii::$app->viewPath . $file;
        if (!is_file($file) || !is_readable($file)) {
            throw new Exception('View file not found:' . $file);
        }
        $html = '';
        $buffer = '';
        $route = '';
        $start = false;
        $end = false;
        $fh = fopen($file, 'r');
        while (!feof($fh)) {
            $line = fgets($fh);
            if (strpos($line, '<!--@') === false) {
                if ($start) {
                    $buffer .= $line;
                } else {
                    $html .= $this->appendCsrfToken($line);
                }
            } else {
                $match = trim(preg_replace('/.+@\s*(\S+).*-->/', '$1', $line));
                if ($match == 'end') {
                    $start = false;
                    $end = true;
                } else {
                    $route = $match;
                    $start = true;
                    $end = false;
                }
            }
            if ($end) {
                if ($route && $this->checkRights($route)) {
                    $html .= $this->appendCsrfToken($buffer);
                }
                $buffer = '';
                $route = '';
            }
        }
        fclose($fh);
        header('Last-Modified:' . gmdate('D, d M Y H:i:s') . 'GMT');
        echo $html;
        exit;
    }


    public function actionIndex()
    {
        if ($this->viewFile) {
            $this->disPlay($this->viewFile);
        }
    }


    protected function appendCsrfToken($html, $tag = 'body')
    {
        if (stripos(ltrim($html), '<' . $tag) !== 0) {
            return $html;
        }
        $html .= PHP_EOL . '<script>var csrfToken="' . Yii::$app->request->getCsrfToken() . '"</script>' . PHP_EOL;
        return $html;
    }


}