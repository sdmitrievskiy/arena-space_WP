<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('WP_DEBUG', false);
@ini_set('display_errors', 1);

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //

//development
//define('DB_NAME', 'arena-space_local');
//define('DB_USER', 'root');
//define('DB_PASSWORD', 'root');
//define('DB_HOST', 'localhost');

//production
define('DB_NAME', 'arspaceru_db');
define('DB_USER', 'arspaceru_mysql');
define('DB_PASSWORD', 'En4zGpQ+');
define('DB_HOST', 'arspaceru.mysql');


/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sdlfjlsdjfl;jsadl;fjdofjgoptjeop4tkp49357245nv');
define('SECURE_AUTH_KEY',  '8457hHKJHJLdfsdlfskhfw4dsfhs');
define('LOGGED_IN_KEY',    'kkdksfkkKKJjdjfEWEHDSFGFY32846238hfhjhKJ');
define('NONCE_KEY',        'd;skjflkdsjlHIHHIHihdsf');
define('AUTH_SALT',        'JJJJJJGGGGUIIOOHdishfkldsjflkjsdf');
define('SECURE_AUTH_SALT', '893275903475906342sdlhfjksbfgljHKHpisryewiu');
define('LOGGED_IN_SALT',   'irhlwe93847832sidfklJ');
define('NONCE_SALT',       'sdl;fjsdkfjlksdjflqruwoieruwoiutoprt');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
