<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

<!--<div class="loader-wrapper">-->
<!--	<div class="cssload-container">-->
<!--		<div class="cssload-speeding-wheel"></div>-->
<!--	</div>-->
<!--</div>-->
<nav class="fixed-menu">
	<div class="wrapper">
		
		<a href="#" class="logo logo_header">

		</a>
		<ul class="nav">
			<li class="nav__item">
				<a href="#section-about" target="_blank" data-modal="false">О нас</a>
			</li>
			<li class="nav__item">
				<a href="#section-inside" target="_blank" data-modal="false">VR пространство</a>
			</li>
			<li class="nav__item">
				<a href="#section-games" target="_blank" data-modal="false">Каталог игр</a>
			</li>
			<li class="nav__item">
				<a href="#section-address" target="_blank" data-modal="false">Контакты</a>
			</li>
			<li class="nav__item">
				<a href="#section-price" target="_blank" data-modal="false">Цены</a>
			</li>
			<li class="nav__item nav__item_info">
				<a href="#animatedModalFaq" class="modal1" target="_blank" data-modal="true" id="demo2">FAQ</a>
			</li>
			<li class="nav__item">
				<a href="#animatedModalFran" class="modal2" target="_blank" data-modal="true" id="demo1">Франшиза</a>
			</li>
		</ul>
	</div>
</nav>
<header class="header">
	<h1>Стань героем сверхновой реальности</h1>
<!--	<video autoplay="autoplay" muted="muted" loop="loop" id="video">-->
<!--		<source src="--><?php //echo esc_url( get_template_directory_uri() ); ?><!--/frontend/dist/sample.mp4" />-->
<!--	</video>-->
</header>
<section id="section-about" class="section-about">
	<div class="wrapper">
		<p class="section-about__highlight-text">Добро пожаловать в сверхновую реальность, где возможно самое невероятное!</p>
		<h2 class="section-about__title">ЧТО ТАКОЕ ARENA SPACE?</h2>
		<div class="section-about__describe-text">
			<p>ARENA SPACE - это уникальное пространство виртуальных развлечений.</p>
			</p>Мы открываем для вас портал во Вселенную, где &nbsp;&nbspможно не только погрузиться в любой &nbsp;&nbsp;&nbsp;фантастический
			мир и быть в самом центре &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;киносюжета с видео 360°, но и стать героем &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;любимой
			игры, побеждать вселенское зло, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;пилотировать межгалактические
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;звездолеты или рисовать собственные &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;миры
			и пространства.</p>
		</div>
	</div>
	<section id="section-inside" class="section-inside">
		<h2 class="section-inside__title">ИЗ ЧЕГО СОСТОИТ ARENA SPACE</h2>
		<div class="wrapper">
			<div class="section-inside__features">
				<div class="feature">
					<h3 class="feature__title feature__title_cube">Площадки виртуальных игр</h3>
					<p class="feature__text">Площадки для игр в виртуальной реальности. Шлем и специальные контроллеры позволяют не только погрузиться в новый
						мир, но и взаимодействовать с ним!</p>
				</div>
				<div class="feature">
					<h3 class="feature__title feature__title_360">Виртуальный киномодуль</h3>
					<p class="feature__text">Виртуальный киномодуль позволяет перенестись внутрь сюжета и попасть в самый центр событий! Выбирай жанр и отправляйся
						в виртуальное кинопутешествие!</p>
				</div>
			</div>
		</div>
	</section>
</section>
<section id="section-games" class="section-games">
	<h2 class="section-games__title">ВСЕЛЕННАЯ ARENA SPACE</h2>
	<div class="wrapper">
		<div class="slider">
			<p class="slider__text">В нашей вселенной вы можете выбрать свой жанр игры, эмоцию, которую вы хотите испытать, героя, в которого хотите превратиться.</p>
			<div
				class="dg-container">
				<div class="dg-wrapper">

					<?php
					if ( have_posts() ) : // если имеются записи в блоге.
						query_posts('cat=2');   // указываем ID рубрик, которые необходимо вывести.
						while (have_posts()) : the_post();  // запускаем цикл обхода материалов блога
							?>
							<a class="slider__item">
								<?php the_post_thumbnail() ?>
								<div class="text"><?php echo strip_tags(the_content()); ?></div>
							</a>

							<?php
						endwhile;  // завершаем цикл.
					endif;
					/* Сбрасываем настройки цикла. Если ниже по коду будет идти еще один цикл, чтобы не было сбоя. */
					wp_reset_query();
					?>


				</div>
				<nav>
					<span class="dg-prev">hi</span>
					<span class="dg-next">next</span>
				</nav>
			</div>
		</div>
		<div class="slider">
			<p class="slider__text"> Что может быть невероятнее, чем оказаться в самом центре происходящих в кино событий? Просто выбирите сюжет и начните
				погружение!</p>
			<div class="dg-container">
				<div class="dg-wrapper">
					<?php
					if ( have_posts() ) : // если имеются записи в блоге.
						query_posts('cat=3');   // указываем ID рубрик, которые необходимо вывести.
						while (have_posts()) : the_post();  // запускаем цикл обхода материалов блога
							?>
							<a class="slider__item">
								<?php the_post_thumbnail() ?>
								<div class="text"><?php echo strip_tags(the_content()); ?></div>
							</a>

							<?php
						endwhile;  // завершаем цикл.
					endif;
					/* Сбрасываем настройки цикла. Если ниже по коду будет идти еще один цикл, чтобы не было сбоя. */
					wp_reset_query();
					?>
				</div>
				<nav>
					<span class="dg-prev">hi</span>
					<span class="dg-next">next</span>
				</nav>
			</div>
		</div>
	</div>
</section>
<section class="section-security">
	<h2 class="section-security__title">БЕЗОПАСНОСТЬ ВСЕЛЕННОЙ ARENA SPACE</h2>
	<p class="section-security__sub-text">Мы делаем все для вашего безопасного погружения!</p>
	<div class="section-security__feature-list">
		<ul class="feature-list-columnize-js">
			<li>Мягкие стены - против ударов</li>
			<li>Сменные накладки - для гигиены</li>
			<li>Безопасный контент для детей</li>
			<li>Легкость погружения - онлайн подсказки персонала</li>
			<li>Возможность выбора сеанса комфортной длительности</li>
		</ul>
	</div>
</section>
<section id="section-form" class="section-form">
	<div class="left"></div>
	<div class="center">
		<h2 class="section-form__title">ЗАРЕГИСТРИРУЙСЯ И ПОЛУЧИ СКИДКУ НА ВИРТУАЛЬНОЕ ПРИКЛЮЧЕНИЕ</h2>

		<? echo do_shortcode('[contact-form-7 id="20" title="Contact form 1"]'); ?>

<!--		<form class="section-form__form">-->
<!--			<input type="text" placeholder="Ваше имя" name="name" />-->
<!--			<input type="text" placeholder="Ваш email" name="mail" />-->
<!--			<button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>-->
<!--		</form>-->
	</div>
	<div class="right"></div>
</section>
<section id="section-address" class="section-address">
	<h2 class="section-address__title">КАК НАС НАЙТИ</h2>
	<div class="section-address__text">Москва, Проспект Мира,</br>119с2, павильон</br>Робостанции, ВДНХ</br>
		</br>
		<span class='blue'>Тел:</span> +7 /000/ 000 9900</br>
		<span class='blue'>E-mail:</span> social@arenaspace.ru</br>
		</br>
		<span class='blue'>Билеты в кассах</br>РОБОСТАНЦИИ</span>
		</br>
		</br>
		</br>
		<span class='blue'>Время работы:</span> 11:00 - 20:00</br>
		<span class='blue'>Касса:</span> 11:00 - 19:30</div>
</section>
<section id="section-price" class="section-price">
	<h2 class="section-price__title">ЦЕНЫ</h2>
	<table class="section-price__table">
		<thead>
		<tr>
			<td>
			<td colspan="2">Сеансы</td>
			</td>
		</tr>
		<tr>
			<td></td>
			<td>
				<span class='blue'>5 минут</span>
			</td>
			<td>
				<span class='blue'>10 минут</span>
			</td>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td class="main">
				<span class='blue'>ИГРОВОЙ КУБ</span>
			</td>
			<td>300
				<span class='blue'>руб</span>
			</td>
			<td>200
				<span class='blue'>руб</span>
			</td>
		</tr>
		<tr>
			<td class="main">
				<span class='blue'>КИНОМОДУЛЬ 360</span>
			</td>
			<td>300
				<span class='blue'>руб</span>
			</td>
			<td>200
				<span class='blue'>руб</span>
			</td>
		</tr>
		<tr>
			<td class="main">
				<span class='blue'>ИГРОВОЙ КУБ</br>+</br>КИНОМОДУЛЬ 360</span>
			</td>
			<td>300
				<span class='blue'>руб</span>
			</td>
			<td>200
				<span class='blue'>руб</span>
			</td>
		</tr>
		</tbody>
	</table>
</section>
<section class="section-partners">
	<div class="partner-wrapper">
		<h2 class="section-partners__title">ПАРТНЕРЫ</h2>
		<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/frontend/dist/images/partners.png" class="section-partners__image" alt="" role="presentation" />
	</div>
</section>
<footer class="footer">
	<div class="wrapper">
		<div class="column">
			<a href="#" class="logo logo_footer">

			</a>
			<p class="footer__copyright">(с) Copyright Arena Space</br>2016</p>
		</div>
		<div class="column">
			<ul class="nav nav_footer">
				<li class="nav__item">
					<a href="#section-about" target="_blank" data-modal="false">О нас</a>
				</li>
				<li class="nav__item">
					<a href="#section-inside" target="_blank" data-modal="false">VR пространство</a>
				</li>
				<li class="nav__item">
					<a href="#section-games" target="_blank" data-modal="false">Каталог игр</a>
				</li>
				<li class="nav__item">
					<a href="#section-address" target="_blank" data-modal="false">Контакты</a>
				</li>
				<li class="nav__item">
					<a href="#section-price" target="_blank" data-modal="false">Цены</a>
				</li>
				<li class="nav__item">
					<a href="#animatedModalFaq1" target="_blank" data-modal="true" id="demo4">FAQ</a>
				</li>
				<li class="nav__item">
					<a href="#animatedModalFran1" target="_blank" data-modal="true" id="demo3">Франшиза</a>
				</li>
				<li class="nav__item">
					<a href="#animatedModalAferta" target="_blank" data-modal="true" id="demo5">Публичная аферта</a>
				</li>
			</ul>
		</div>
		<div class="socials">
			<a href="#" class="socials__social socials__social_fb"></a>
			<a href="#" class="socials__social socials__social_insta"></a>
			<a href="#" class="socials__social socials__social_vk"></a>
			<a href="#" class="socials__social socials__social_odnokl"></a>
		</div>
	</div>
</footer>

<div id="animatedModalFran" class="modalContainer">
	<div id="btn-close-modal" class="closeModal close-animatedModalFran">
		<img src="<? echo get_template_directory_uri(); ?>/frontend/dist/images/closebt.svg">
	</div>
	<div class="modal-content">
		<?php $my_post_obj = get_post( 25 ); // параметр функции - ID поста, содержимое которого нужно вывести
		echo $my_post_obj->post_content; ?>
	</div>
</div>
<div id="animatedModalFaq" class="modalContainer">
	<div id="btn-close-modal" class="closeModal close-animatedModalFaq">
		<img src="<? echo get_template_directory_uri(); ?>/frontend/dist/images/closebt.svg">
	</div>
	<div class="modal-content">
		<?php $my_post_obj = get_post( 27 ); // параметр функции - ID поста, содержимое которого нужно вывести
		echo $my_post_obj->post_content; ?>
	</div>
</div>

<div id="animatedModalFran1" class="modalContainer">
	<div id="btn-close-modal" class="closeModal close-animatedModalFran1">
		<img src="<? echo get_template_directory_uri(); ?>/frontend/dist/images/closebt.svg">
	</div>
	<div class="modal-content">
		<?php $my_post_obj = get_post( 25 ); // параметр функции - ID поста, содержимое которого нужно вывести
		echo $my_post_obj->post_content; ?>
	</div>
</div>
<div id="animatedModalFaq1" class="modalContainer">
	<div id="btn-close-modal" class="closeModal close-animatedModalFaq1">
		<img src="<? echo get_template_directory_uri(); ?>/frontend/dist/images/closebt.svg">
	</div>
	<div class="modal-content">
		<?php $my_post_obj = get_post( 27 ); // параметр функции - ID поста, содержимое которого нужно вывести
		echo $my_post_obj->post_content; ?>
	</div>
</div>

<div id="animatedModalAferta" class="modalContainer">
	<div id="btn-close-modal" class="closeModal close-animatedModalAferta">
		<img src="<? echo get_template_directory_uri(); ?>/frontend/dist/images/closebt.svg">
	</div>
	<div class="modal-content">
		<?php $my_post_obj = get_post( 40 ); // параметр функции - ID поста, содержимое которого нужно вывести
		echo $my_post_obj->post_content; ?>
	</div>
</div>


<?php get_footer(); ?>
