# jQuery.fit_modal

#### EN
[View documentation](https://philippzhulev.github.io/fitmodal/)


#### RU
_

### Адаптивное модальное окно для контента с возможностью ajax загрузки 

[DEMO](https://philippzhulev.github.io/fitmodal/)

_

#### Возможности:
+ Простая html структура
+ Три типа реализации в html: 
    + только блок контента, который автоматически обернется нужными элементами, 
    + полный html модального окна, 
    + загрузить контент через ajax (с использованием любого из двух предыдущих вариантов) 
+ 31 опция для полной настройки плагина
+ 6 событий + 2 обратных события + пользовательские функции
+ Широкий спектр применения (по дефолту активироваться кликом по элементу, но также с легкостью можно повесить активацию на любое другое событие)
+ Несколько типов анимации появления а так же легкое создание и присвоение своих анимаций через css
+ Пользовательская настройка адаптивности
+ Простая настройка ajax возможностей
+ Подходит для BEM структуры проекта

#### Быстрый старт:

#####Подключаем:

+ jquery.fit_modal.css
+ jquery.fit_modal.js

или

+ jquery.fit_modal.min.css
+ jquery.fit_modal.min.js

из папки dist

####Для нормальной работы плагина требуется:
+ normalize.css или reset.css
+ jQuery 1.8.3+ 

####Тип 1:

```html

<!--Activation button-->
<button class="btn__active-modal" 
    data-title="Feedback form" 
    data-win-animation="fade_in_top" 
    data-content_block=".content__wrap_2">
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

####Тип 2:

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

<script>
    $(window).ready(function () {
        
        //Plugin init
        $('.btn__active-modal_1').fit_modal({
            fast_create : false,
            window_animation_type   : 'fade_in_top',
            frame_animation_speed   :  400, 
            modal_title  :  'Hallo world!',
        });
        $('.btn__active-modal_2').fit_modal({
            fast_create : false,
            window_animation_type   : 'fade_in_left',
            win_animation_speed     :  200, 
            modal_title  :  "I'm alive!",
        });
    });
</script>

```
Такой вариант активации позволяет запускать в одном модальном окне несколько типов контента с разными параметрами, что может быть полезно в некоторых ситуациях и существенно сокращает количество html кода на странице
 

####Тип 3:

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

####Адаптивность

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

####Быстрая стилизация

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

###API

####Опции

Name                  | Default                | Description
----------------------|------------------------|----------------------------
modal_frame           | .modal__frame          | Класс общей обертки (фона) модального окна
modal_window          | .modal__window         | Класс модального окна
modal_body            | .modal__window__body   | Класс тела модального окна
modal_title_class     | .modal__window__title  | Класс заголовка модального окна
modal_title           | Modal window           | Заголовок модального окна
modal_content_block   | null                   | Класс обертки контента          
frame_animation_speed | 300                    | Скорость анимации фона
win_animation_speed   | 500                    | Скорость анимации окна
window_animation_type | fade_in_top            | Тип анимации окна
modal_close           | .modal__window__close  | Класс кнопки закрытия
fast_create           | true                   | Сгенерировать модальное окно и обернуть им контент
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
        active_custom_func : function (el, id) {
            console.log(el);
            $(this.modal_content_block).html('ID your modal window' + id.slice(1));
        }
     });
```
 
В примере мы вывели в консоль объект на который был произведен клик и произвольно сгенерированный индикатор модального окна в область контента.
 
#####Обратное событие

```javascript
    
    var element = $('element').fit_modal({
        modal_title : 'Hallo World!',
        modal_content_block : '.content-block',
        window_animation_type   : 'fade_in_top'
    });
    
    function active_modal() {
        return element.trigger('on.modal.active');
    }
    
     setTimeout(active_modal, 5000);
```
В данном примере мы активируем модальное окно на странице через 5 секунд после ее загрузки используя обратное событие **on.modal.active**

Обратное события
+ on.modal.active - активация модального окна
+ on.modal.close - закрытие модального окна

Планы по развитию плагина 
--
+ Возможность переключения между модальными окнами (пролистывание) при помощи встроенного интерфейса
+ Встроенный мод галереи изображений

## Build

```html

__dist     -->  Файлы плагина
__dist_src -->  Исходники плагина
__public   -->  Файлы демо страницы
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
