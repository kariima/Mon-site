<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfba3b4e82b5cb80b24bb46b530ea0a62
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfba3b4e82b5cb80b24bb46b530ea0a62::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfba3b4e82b5cb80b24bb46b530ea0a62::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
