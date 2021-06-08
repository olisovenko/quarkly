import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Icon, Box, Section, Button, Image, Input, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdArrowDownward, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(33, 33, 33, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/60bf6c4a436263001e1ed3ed/images/drew-beamer-5DD7-L4A4Uw-unsplash.jpg?v=2021-06-08T13:18:12.943Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Text text-align="center" font="normal 300 45px/4 --fontFamily-googleMerienda">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Divly
				</Strong>
				{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Creative Studio
				</Strong>
			</Text>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						современные, креативные сайты нового поколения
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Сайты и лендинги под ключ дизайна до верстки – без изъяна
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Подробнее о DIVLY STUDIO
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%" color="--greyD1">
					<Override slot="StackItemContent" />
					<Text margin="0px" font="--headline2" md-font="--headline2" color="--primary">
						Почему Divly?
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="300 20px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Более{" "}
						<Strong>
							13 лет опыта
						</Strong>
						{" "}в разработке решений от бюджетных до крупных проектов и нестандартных решений.{" "}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="300 20px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Собственные продукты и база наработок,{" "}
						<Strong>
							готовый стек технологий
						</Strong>
						{" "}для быстрой и качественной разработки
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="300 20px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Уверенная{" "}
						<Strong>
							поэтапная разработка
						</Strong>
						{" "}с утверждением каждого этапа,{" "}
						<Strong>
							поэтапная оплата
						</Strong>
						{" "}и персональный менеджер на всех этапах разработки
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="radial-gradient(at center,rgba(0,0,0,0) 39%,rgba(0,0,0,1) 100%),url(https://images.unsplash.com/photo-1588767904389-0dd859d11a2b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover">
			<Box padding="50px 50px 50px 50px" background="--color-light" color="--dark" width="400px">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					Без Границ
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					От макета до продающего сайта
				</Text>
				<Text font="--base">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						1.
					</Strong>
					{" "}Обсудим идею сайта и дизайна индивидуально и предложим подходящие решения
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						2.{" "}
					</Strong>
					Подберем необходимый стек технологий для разработки или платформу
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						3.
					</Strong>
					{" "}Обсудим сроки, этапы и стоимость разработки
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						4.
					</Strong>
					{" "}Приступим к разработке поэтапно
				</Text>
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				Что выбрать?
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--grey" margin="0">
						Сайт или лендинг
					</Text>
					<Text as="h3" font="--headline2" margin="5px 0 20px 0" color="--darkL2">
						На Tilda
					</Text>
					<Button
						background="--color-primary"
						border-color="#909090"
						border-width="2px"
						border-radius={0}
						height="50px"
						width="100% border-box"
						font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						hover-background="#0788e5"
					>
						Заказать
					</Button>
					<Text as="p" margin="20px 0 5px 0" padding="0px 0px 50px 0px" font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Tilda – один из самых современных и быстро развивающихся конструкторов сайтов от российских разработчиков, захвативший весь рынок – несмотря на то, что это конструктор, возможности его безграничны.{" "}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--grey" margin="0">
						Сайт или лендинг
					</Text>
					<Text as="h3" font="--headline2" margin="5px 0 20px 0" color="--darkL2">
						На Quarkly
					</Text>
					<Button
						background="--color-primary"
						border-color="#909090"
						border-width="2px"
						border-radius={0}
						height="50px"
						width="100% border-box"
						font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						hover-background="#0788e5"
					>
						Заказать
					</Button>
					<Text as="p" margin="20px 0 5px 0" padding="0px 0px 50px 0px" font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Современный инструмент от разработчиков топовых конструкторов в РФ, аналог Webflow – конструктор с безграничными возможностями верстки сайтов и лендингов с макета в Figma или PS. Быстрая загрузка и чистый код – гарантированы.{" "}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--grey" margin="0">
						Сайт или лендинг
					</Text>
					<Text as="h3" font="--headline2" margin="5px 0 20px 0" color="--darkL2">
						Самопис
					</Text>
					<Button
						background="--color-primary"
						border-color="#909090"
						border-width="2px"
						border-radius={0}
						height="50px"
						width="100% border-box"
						font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						hover-background="#0788e5"
					>
						Заказать
					</Button>
					<Text as="p" margin="20px 0 5px 0" padding="0px 0px 50px 0px" font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Несмотря на гибкость и мощность продуктов и готовых решений, вы все равно хотите самописный сайт? Не будем убеждать в обратном. Отрисуем макет, графику, блоки, страницы – сверстаем все в чистом HTML и отдадим на загрузку HTML на любой сервер или платформу.{"  "}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--grey" margin="0">
						Интернет-магазин
					</Text>
					<Text as="h3" font="--headline2" margin="5px 0 20px 0" color="--darkL2">
						На InSales
					</Text>
					<Button
						background="--color-primary"
						border-color="#909090"
						border-width="2px"
						border-radius={0}
						height="50px"
						width="100% border-box"
						font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						hover-background="#0788e5"
					>
						Заказать
					</Button>
					<Text as="p" margin="20px 0 5px 0" padding="0px 0px 50px 0px" font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Для крупных онлайн-магазинов с массой интеграций и персональных решений – подойдет современная платформа InSales, позволяющая создавать качественные ecommerce решения в сжатые сроки, высокого качества и топовыми интеграциями.{" "}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0" background="--color-primary">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 50px 0"
				color="#ffffff"
			>
				Наши работы
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/60bf6c4a436263001e1ed3ed/images/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpeg?v=2021-06-08T15:09:40.118Z" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/60bf6c4a436263001e1ed3ed/images/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpeg?v=2021-06-08T15:09:40.118Z" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/60bf6c4a436263001e1ed3ed/images/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpeg?v=2021-06-08T15:09:40.118Z" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/60bf6c4a436263001e1ed3ed/images/nathan-riley-9q3I8XhesQI-unsplash.jpg?v=2021-06-08T16:08:39.679Z)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Наш адрес
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							Санкт–Петербург, Московский проспект 22
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Почта
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								product@divly.ru
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Телефон
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+7 (911) 157-17-31
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Напишите нам
						</Text>
						<Formspree endpoint="https://formspree.io/f/xleanrnp">
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Ваш телефон
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Сообщение
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Отправить заявку
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Span text-decoration-line="none" variant="--base" color="--grey" hover-color="--primary">
				Divly Creative Studio
			</Span>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});