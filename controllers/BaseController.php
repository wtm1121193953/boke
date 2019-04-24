<?php
/**
 * Created by PhpStorm.
 * User: 13148872522
 * Date: 2019/4/24
 * Time: 11:41
 */

namespace app\controllers;

use Egulias\EmailValidator\Warning\EmailTooLong;
use Yii;
use yii\web\Controller;
use app\commands\code\ErrorCode;
use yii\base\Exception;




class BaseController extends Controller
{

    protected  $errCode = 0;

    protected  $errMsg  = '';

    protected  $modelClass = '';

    protected  $view  = null;

    protected  $model = null;



    public function init()
    {

        if($this->view) {
            $this->disPlay($this->view);
        }

        if($this->modelClass){
            if(!class_exists($this->modelClass)){
                throw new Exception('model not exists '.$this->modelClass);
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
    protected function get($key = ''){
        return $key?Yii::$app->request->get($key):Yii::$app->request->get();
    }


    /**
     * 获取post参数
     * @param string $key
     * @return array|mixed
     */
    protected function post($key = ''){
        return $key?Yii::$app->request->post($key):Yii::$app->request->post();
    }

    /**
     * 是否为post请求
     * @return bool|mixed
     */
    protected function isPost(){
        return Yii::$app->request->isPost;
    }

    /**
     * 是否为ajax请求
     * @return bool|mixed
     */
    protected function isAjax(){
        return Yii::$app->request->isAjax;
    }


    /**
     * 应答
     * @param array $data
     * @return array
     */
    protected function response($data = []){

        Yii::$app->response->format = Yii\web\Response::FORMAT_JSON;
        if($this->errCode){
            return ['errCode'=>$this->errCode,'errMsg'=>$this->errMsg,'data'=>$data];
        }elseif(!empty($this->model)){
            return ['errCode'=>$this->model->getErrCorde(),'errMsg'=>$this->model->getErrMsg(),'data'=>$data];
        }else{
            return ['errCode'=>0,'errMsg'=>'','data'=>$data];
        }
    }


    protected function disPlay($view = ''){

        if($view){
            $file = ltrim($view,DIRECTORY_SEPARATOR);
        }else{
            $file = ltrim($this->view,DIRECTORY_SEPARATOR);
        }
        Yii::$app->viewPath = dirname(Yii::$app->viewPath,1).DIRECTORY_SEPARATOR.'views';
        $file = str_replace("\\","/",Yii::$app->viewPath).$file;
        echo  file_get_contents($file);
    }








}