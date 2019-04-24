<?php

namespace app\modules\api\controllers;

use  app\controllers\BaseController;
use Yii;
use app\modules\api\models\Test;


class TestController extends BaseController
{

    protected $view = '/api/aaa.html';

    protected $modelClass = '\app\modules\api\models\Test';



    public function actionIndex()
    {

    }





}
