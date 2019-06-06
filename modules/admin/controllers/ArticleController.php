<?php

namespace app\modules\admin\controllers;

use app\modules\admin\controllers\BaseController;
use Yii;
use app\modules\admin\models\Test;



class ArticleController extends BaseController
{

    protected $view = '/admin/article/index.html';


    public function actionCreate()
    {
        return $this->disPlay('/admin/article/add-edit.html');
    }



}
