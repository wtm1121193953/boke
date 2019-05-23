<?php
/**
 * Created by PhpStorm.
 * User: 13148872522
 * Date: 2019/4/24
 * Time: 17:01
 */

namespace app\modules\admin\models;

use yii;
use app\models\BaseModel;


Class Test extends BaseModel
{

    public static function tableName()
    {
        return 'test';
    }


    public static function getDb()
    {

        return Yii::$app->get('db');

    }


}