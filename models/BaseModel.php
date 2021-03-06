<?php
/**
 * Created by PhpStorm.
 * User: 13148872522
 * Date: 2019/4/24
 * Time: 16:57
 */

namespace app\models;

use Codeception\Step\Executor;
use Yii;
use yii\db\ActiveRecord;


class BaseModel extends ActiveRecord
{


    public function init()
    {
        parent::init(); // TODO: Change the autogenerated stub

    }

//
//    protected function getDbInstance(){
//
//        $db = static::getDb();
//        if($db){
//            return $db;
//        }
//        return Yii::$app->db;
//    }


    public function getOne($id='',$where = [],$fields = "*")
    {
        if ($id) {
            $res = self::findOne($id);
            return $res ? $res->toArray() : [];
        }
        return self::find()->select($fields)->where($where)->asArray()->one();
    }


}