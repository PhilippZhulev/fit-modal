# jQuery.fit_modal

[![NPM version](https://img.shields.io/badge/npm-1.14.6-green.svg)](https://www.npmjs.com/package/fit_modal)

## [EN](#english) | [RU](#russian)

## ENGLISH
_

### jQuery responsive modal window + download ajax content

## Description
fit_modal - is an adaptive modal window for content that has a large amount of settings and the ability to download content via ajax.

**[DEMO](https://philippzhulev.github.io/fit-modal/index.html)**

## Benefits
+ Simple html structure
+ Three types of implementation in html
+ 33 options for full plug-in configuration
+ 6 events + 2 reverse events + custom functions
+ Wide range of applications
+ Multiple Animation Types
+ Easy customization of ajax capabilities

## Get started

**Node package manager:**
```html
npm install fit_modal
```
Connect: 

+ jquery.fit_modal.css 
+ jquery.fit_modal.js 

or
 
+ jquery.fit_modal.min.css
+ jquery.fit_modal.min.js 
from the folder dist 

**Plugin requires:** 
+ normalize.css or reset.css
+ jQuery 1.8.3+ 

#### default initialization
```html
<!--Activation button-->
<button class="btn__active-modal" 
    data-title="Feedback form" 
    data-win-animation="fade_in_top" 
    data-content_block=".content__wrap">
    Open modal
</button>

<!--content block-->
<div class="content__wrap">Hallo world!</div>

<script>
    $(window).ready(function () {
        //Plugin init
        $('.btn__active-modal').fit_modal();
        
    });
</script>
```

Аттрибуты:
 + **data-title** - Modal window title
 + **data-win-animation** - Window Animation Type
 + **data-content_block** - Content wrapper class
 + **data-href** - Link to page or server (ajax)

**Attributes take precedence over options!**

#### Without automatic generation
```html
<!--Activation button-->
<button class="btn__active-modal" data-content_block=".content__wrap_1">
    Open modal №1
</button>

<button class="btn__active-modal" data-content_block=".content__wrap_2">
    Open modal №2
</button>

<!--content block-->
<div class="modal__frame">
    <div class="modal__window">
        <div class="modal__window__header">
            <div class="modal__window__close"></div>
            <div class="modal__window__title"></div>
        </div>
        <div class="modal__window__body">
            <div class="content__wrap_1">Hallo world!</div>
            <div class="content__wrap_2">I'm alive!</div>
        </div>
    </div>
</div>

<!--Plugin init-->
<script>
    $(window).ready(function () {
        $('.btn__active-modal_1').fit_modal({
            fast_create : false,
            modal_title  :  'Hallo world!',
        });

        $('.btn__active-modal_2').fit_modal({
            fast_create : false,
            window_animation_type   : 'fade_in_left',
            win_animation_speed     :  300, 
            modal_title  :  "I'm alive!"
        });
    });
</script>
```
This activation option allows you to run several types of content with different parameters in one modal window, which can be useful in some situations and significantly reduces the amount of html code on the page.

_

*Using this implementation method, you can use only one type of animation for all events.*



 #### Ajax content download
 ```html
<!--Activation button-->

<button class="btn__active-modal" data-href="test.html">
    View document
</button>


<!--content block-->
<div class="content__wrap_ajax"></div>

<script>
    $(window).ready(function () {
        $('.btn__active-modal').fit_modal({
            on_ajax_mod  :  true,
            modal_content_block : 'content__wrap_ajax',
            modal_title : 'View document',
            window_animation_type  : 'fade_in_top'
        });
    });
</script>
 ```
In this way, you can upload content via ajax    

#### ajax_mod settings
```javascript
    $('element').fit_modal({
        on_ajax_mod  :  true,
        ajax_mod                : { //ajax options
            href      :  null, //url
            post_type :  'GET', //action type
            data      :  null, //data type
            error_message : "Server error or page not found.", //error message
            success_custom_func : null, //user function
            error_custom_func : null //user function
        },
    });
```

#### Responsive mod
```javascript
    $('element').fit_modal({
        responsive_mod : {  
            media : 1024, 
            on_custom : null, 
            off_custom : null, 
            custom_func : null 
        }
    });
```
The media parameter specifies with which permission to run adaptivity (768px by default). 0 - Adaptivity is disabled. The remaining parameters are user-defined functions.


#### Fast styling
+ frame_style - Background Style
+ window_style - Window Style

```javascript
    $('element').fit_modal({
           window_style : {
               "borderRadius" :  "15px",
               "background" : "rgba(255, 255, 0, 0.68);"
           },
           frame_style : {
               "background" : "rgba(110, 117, 142, 0.5)"
           }, 
    });
```
You can specify any css parameters.

## Options


Name                  | Default                | Description
----------------------|------------------------|----------------------------
modal_frame           | .modal__frame          | Class of the general wrapper (background) of the modal window
modal_window          | .modal__window         | Modal window class
modal_body            | .modal__window__body   | Modal window body class
modal_title_class     | .modal__window__title  | Modal window title class
modal_title           | Modal window           | Modal window title
modal_content_block   | null                   | Content wrapper class          
frame_animation_speed | 200                    | Background animation speed
win_animation_speed   | 400                    | Window animation speed
window_animation_type | fade_in_top            | Window Animation Type
modal_close           | .modal__window__close  | Closure button class
fast_create           | true                   | Generate modal window and wrap the content with it
init_custom_func      | null                   | The user-defined function is activated when the initialization
active_custom_func    | null                   | The user-defined function is activated when the window is turned on
close_custom_func     | null                   | The user-defined function is activated when the window is closed
window_style          | {}                     | Quickly set window styles
frame_style           | {}                     | Quickly set background styles
on_ajax_mod           | false                  | Enable Ajax Mod (Download external content)
ajax_mod              | {options}              | Ajax options
close_on_bg           | true                   | Close window by clicking on background
responsive_mod        | {options}              | Adaptive Settings
fix_fw_el             | null                   | Fixes bouncing fixed and absolute elements with 100% width (you need to add an element class) 
fix_right_el          | null                   | Correction of fixed and absolute elements with right positioning (you need to add an element class)
set_blur              | null                   | blur background elements 

##### ajax_mod

Name                  | Default                          | Description
----------------------|----------------------------------|----------------------------
href                  | null                             | Link to page or server
post_type             | 'GET'                            | Request Type
data                  | null                             | What should I transfer to the server
error_message         | Server error or page not found.  | Error message
success_custom_func   | null                             | Function on successful sending
error_custom_func     | null                             | Function on error      

##### responsive_mod

Name                  | Default                | Description
----------------------|------------------------|----------------------------------------
media                 | 0                      | Resolution below which includes adaptivity
on_custom             | null                   | Function when enabling adaptability
off_custom            | null                   | Function when the adaptivity is turned off
custom_fun            | null                   | Function when changing the resolution

##### Animations

+ fade_in 
+ fade_in_top 
+ fade_in_down 
+ fade_in_left 
+ fade_in_right 
+ zoom_in

##### Events

+ fm.onActive - When the modal window is activated
+ fm.onWindow - When the content area of the modal window appears
+ fm.onClose - When the modal window is closed
+ fm.onCloseFrame - When the modal window is completely closed
+ fm.onResponsive - When adaptivity is enabled
+ fm.offResponsive - When the adaptivity is turned off



#### demonstration of the event
```javascript
   var this_modal = $('element').fit_modal();

   this_modal.on('fm.onActive', function() {
       console.log('wow!')
   });
```

#### Custom function and reverse event

**html**
```html
<form action="" class="test__form">
    <input type="text" class="test__input">
</form>
<div class="no_elm"></div>


<div class="demo-modal__us-func"></div>
```
**javaScript**
```javascript
    var user_modal = $('.no_elm').fit_modal({
        modal_content_block : '.demo-modal__us-func',
        modal_title : 'User modal',
        window_animation_type  : 'fade_in_top',
        active_custom_func : function (el, fn) {
            $(this.modal_title_class).html(this.modal_title + ' - ' + fn.idClass.slice(1));
            $(this.modal_content_block).html($('.test__input').val());
            console.log(fn);
        }
    });
    
    $('.test__form').submit(function (e) {
        e.preventDefault();
        user_modal.trigger('on.modal.active');
    });
```
An example of work can be seen in the demo


Plans for the development of the plugin
-
+ Ability to switch between modal windows (scrolling) with the built-in interface
+ Built-in image gallery mod

## Build

```html
__dist     -->  Plug-in files
__dist_src -->  Plug-in sources
__docs     -->  Demo page files
______Css           -->  Styles  (minify)
______fonts         -->  Fonts     
______Js            -->  javaScript (minify)
______img           -->  Images
__src      --> Demo page sources
______components    -->  Components
______js            -->  javaScript (not minify)
______css           -->  css (not minify)
______nib           -->  Functions for stylus
______plugins       -->  Plu-ins

```


## License

© Philipp Zhulev [MIT License](LICENSE).

 _______________________________________________________________


## RUSSIAN
_

### Адаптивное модальное окно для контента с возможностью ajax загрузки 

[DEMO](https://philippzhulev.github.io/fit-modal/index.html)

_

## Возможности:
+ Простая html структура
+ Три типа реализации в html: 
    + только блок контента, который автоматически обернется нужными элементами, 
    + полный html модального окна, 
    + загрузить контент через ajax (с использованием любого из двух предыдущих вариантов) 
+ 33 опции для полной настройки плагина
+ 6 событий + 2 обратных события + пользовательские функции
+ Широкий спектр применения (по дефолту активироваться кликом по элементу, но также с легкостью можно повесить активацию на любое другое событие)
+ Несколько типов анимации появления а так же легкое создание и присвоение своих анимаций через css
+ Пользовательская настройка адаптивности
+ Простая настройка ajax возможностей
+ Подходит для BEM структуры проекта

## Быстрый старт:

**Node package manager:**
```html
npm install fit_modal
```

#### Подключаем:

+ jquery.fit_modal.css
+ jquery.fit_modal.js

или

+ jquery.fit_modal.min.css
+ jquery.fit_modal.min.js

из папки dist

#### Для нормальной работы плагина требуется:
+ normalize.css или reset.css
+ jQuery 1.8.3+ 

#### Тип 1:

```html

<!--Activation button-->
<button class="btn__active-modal" 
    data-title="Feedback form" 
    data-win-animation="fade_in_top" 
    data-content_block=".content__wrap">
    Open modal
</button>

<!--content block-->
<div class="content__wrap">Hallo world!</div>

<script>
    $(window).ready(function () {
        //Plugin init
        $('.btn__active-modal').fit_modal();
        
    });
</script>

```
Если у вас на странице несколько типов контента, то каждый будет отдельным модальным окном 

Аттрибуты:
 + **data-title** - Заголовок модального окна
 + **data-win-animation** - Анимация появления окна (по умолчанию: fade_in)
 + **data-content_block** - указывает класс обертки контента
 + **data-href** - если включен ajax мод, сюда пишется ссылка на документ или сервер, откуда нужно брать контент

**Атрибуты имеют приоритет над опциями!**

#### Тип 2:

```html
<!--Activation button-->
<button class="btn__active-modal" data-content_block=".content__wrap_1">
    Open modal №1
</button>

<button class="btn__active-modal" data-content_block=".content__wrap_2">
    Open modal №2
</button>

<!--content block-->
<div class="modal__frame">
    <div class="modal__window">
        <div class="modal__window__header">
            <div class="modal__window__close"></div>
            <div class="modal__window__title"></div>
        </div>
        <div class="modal__window__body">
            <div class="content__wrap_1">Hallo world!</div>
            <div class="content__wrap_2">I'm alive!</div>
        </div>
    </div>
</div>

<!--Plugin init-->
<script>
    $(window).ready(function () {
        $('.btn__active-modal_1').fit_modal({
            fast_create : false,
            modal_title  :  'Hallo world!',
        });

        $('.btn__active-modal_2').fit_modal({
            fast_create : false,
            window_animation_type   : 'fade_in_left',
            win_animation_speed     :  300, 
            modal_title  :  "I'm alive!"
        });
    });
</script>
```
Такой вариант активации позволяет запускать в одном модальном окне несколько типов контента с разными параметрами, что может быть полезно в некоторых ситуациях и существенно сокращает количество html кода на странице


#### Тип 3:

```html

<!--Activation button-->
<button class="btn__active-modal" data-href="test.html">
    View document
</button>

<!--content block-->
<div class="content__wrap_ajax"></div>

<script>
    $(window).ready(function () {
        
        //Plugin init
        $('.btn__active-modal').fit_modal({
            on_ajax_mod  :  true,
            modal_content_block : 'content__wrap_ajax',
            modal_title : 'View document',
            window_animation_type  : 'fade_in_top'
        });
    });
</script>

```
Таким способом вы можете подгрузить контент через ajax

**У ajax мода есть свои настройки:**
```javascript
    $('element').fit_modal({
        on_ajax_mod  :  true,
        ajax_mod                : { //ajax options
            href      :  null, //url
            post_type :  'GET', //action type
            data      :  null, //data type
            error_message : "Server error or page not found.", //error message
            success_custom_func : null, //user function
            error_custom_func : null //user function
        },
    });
```

#### Адаптивность

```javascript
    $('element').fit_modal({
        responsive_mod          : {  //responsive
            media : 0, //responsive resolution
            on_custom : null, //user function
            off_custom : null, //user function
            custom_func : null //user function
        }
    });
```

В параметре **media** указывается с какого разрешения запускать адаптивность (по умолчанию 768px). 0 - адаптивность отключена. Остальные параметры это пользовательские функции.

#### Быстрая стилизация

```javascript
    $('element').fit_modal({
           window_style : {
               "background" : "rgba(110, 117, 142, 0.5)"
           },
           frame_style : {
               "borderRadius" :  "15px"
           }, 
    });
```
+ frame_style - Стиль фона
+ window_style - Стиль окна

Можно задать любые параметры css.

### API

## Опции

Name                  | Default                | Description
----------------------|------------------------|----------------------------
modal_frame           | .modal__frame          | Класс общей обертки (фона) модального окна
modal_window          | .modal__window         | Класс модального окна
modal_body            | .modal__window__body   | Класс тела модального окна
modal_title_class     | .modal__window__title  | Класс заголовка модального окна
modal_title           | Modal window           | Заголовок модального окна
modal_content_block   | null                   | Класс обертки контента          
frame_animation_speed | 200                    | Скорость анимации фона
win_animation_speed   | 400                    | Скорость анимации окна
window_animation_type | fade_in_top            | Тип анимации окна
modal_close           | .modal__window__close  | Класс кнопки закрытия
fast_create           | true                   | Сгенерировать модальное окно и обернуть им контент
init_custom_func      | null                   | Пользовательская функция активируется при инициализации
active_custom_func    | null                   | Пользовательская функция активируется при включении окна
close_custom_func     | null                   | Пользовательская функция активируется при закрытие окна
window_style          | {}                     | Быстро задать стили окна
frame_style           | {}                     | Быстро задать стили фона
on_ajax_mod           | false                  | Включить Ajax мод (Загрузка внешнего контента)
ajax_mod              | {options}              | Опции ajax
close_on_bg           | true                   | Закрывать окно кликом по фону
responsive_mod        | {options}              | Настройки адаптивности
fix_fw_el             | null                   | Исправляет прыгание fixed элементов с 100% шириной (нужно добавить класс элемента) 
fix_right_el          | null                   | Коррекция фиксированного и абсолютного элементы с позиционированием по правому краю (вам нужно добавить класс элемента)
set_blur              | null                   | Разымытие фоновых элементов (указать класс элемента) 

##### ajax_mod

Name                  | Default                          | Description
----------------------|----------------------------------|----------------------------
href                  | null                             | Ссылка на страницу или сервер
post_type             | 'GET'                            | Тип запроса
data                  | null                             | Что передать нужно отдать на сервер
error_message         | Server error or page not found.  | Сообщение об ошибке
success_custom_func   | null                             | Функция при успешной отправке
error_custom_func     | null                             | Функция при ошибке       

##### responsive_mod

Name                  | Default                | Description
----------------------|------------------------|----------------------------------------
media                 | 0                      | Разрешение ниже которого включается адаптивность
on_custom             | null                   | Функция при включении адаптивности
off_custom            | null                   | Функция при выключении адаптивности
custom_fun            | null                   | Функция при смене разрешения

##### Анимации

+ fade_in - Плавное появление
+ fade_in_top - Плавное появление сверху
+ fade_in_down - Плавное появление снизу
+ fade_in_left - Плавное появление слева
+ fade_in_right - Плавное появление справа
+ zoom_in - Плавное увеличение

##### События

+ fm.onActive - При Активации модального окна
+ fm.onWindow - При Появлении контентной области модального окна
+ fm.onClose - При закрытии модального окна
+ fm.onCloseFrame - При полном закрытии модального окна
+ fm.onResponsive - При включении адаптивности
+ fm.offResponsive - При выключении адаптивности
 
 ```javascript
    var this_modal = $('element').fit_modal();

    this_modal.on('fm.onActive', function() {
        console.log('wow!')
    });
 ```
##### Пользовательская функция
```javascript
     $('element').fit_modal({
        active_custom_func : function (el, fm) {
            console.log(el);
            $(this.modal_content_block).html('ID your modal window' + fm.idClass.slice(1));
        }
     });
```
 
В примере мы вывели в консоль объект на который был произведен клик и произвольно сгенерированный индикатор модального окна в область контента.
 
#### Обратное событие и пользовательская функция

**html**
```html
<form action="" class="test__form">
    <input type="text" class="test__input">
</form>
<div class="no_elm"></div>


<div class="demo-modal__us-func"></div>
```
**javaScript**
```javascript
    var user_modal = $('.no_elm').fit_modal({
        modal_content_block : '.demo-modal__us-func',
        modal_title : 'User modal',
        window_animation_type  : 'fade_in_top',
        active_custom_func : function (el, fn) {
            $(this.modal_title_class).html(this.modal_title + ' - ' + fn.idClass.slice(1));
            $(this.modal_content_block).html($('.test__input').val());
            console.log(fn);
        }
    });
    
    $('.test__form').submit(function (e) {
        e.preventDefault();
        user_modal.trigger('on.modal.active');
    });
```
Пример работы можно посмотреть в демо

**Обратное события**
+ on.modal.active - активация модального окна
+ on.modal.close - закрытие модального окна

### Планы по развитию плагина 
--
+ Возможность переключения между модальными окнами (пролистывание) при помощи встроенного интерфейса
+ Встроенный мод галереи изображений

## Build

```html

__dist     -->  Файлы плагина
__dist_src -->  Исходники плагина
__docs     -->  Файлы демо страницы
______Css           -->  Стили  (minify)
______fonts         -->  Шрифты     
______Js            -->  javaScript (minify)
______img           -->  Изображения
__src      --> Исходники демо страницы
______components    -->  Компоненты
______js            -->  javaScript (not minify)
______css           -->  css (not minify)
______nib           -->  функции для stylus
______plugins       -->  Плагины

```

По всем вопросам пишите на e-mail: Filippja@gmail.com

## Лицензия

© Philipp Zhulev [MIT License](LICENSE).
