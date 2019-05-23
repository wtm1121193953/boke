<?php

return ['components' => [
    'db' => [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=test',
        'username' => 'root',
        'password' => 'root',
        'charset' => 'utf8',
    ],
    'db2' => [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=test_1',
        'username' => 'root',
        'password' => 'root',
        'charset' => 'utf8',
    ],
]];