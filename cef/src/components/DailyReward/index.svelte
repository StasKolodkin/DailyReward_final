<script>
	import './style.sass'

	import ModalPass from './components/ModalPass/ModalPass.svelte'
	import ModalItem from './components/ModalItem/ModalItem.svelte'

	import dateIcon from './assets/svg/date.svg'
	import closeIcon from './assets/svg/esc.svg'
	import telegramIcon from './assets/svg/telegram.svg'
	import discordIcon from './assets/svg/discord.svg'
	import youtubeIcon from './assets/svg/youtube.svg'
	import calendarIcon from './assets/svg/calendar.svg'
	import itemImg from './assets/img/item.png'
	import loadingGif from './assets/gif/load.gif'
	import blueCurrencyIcon from './assets/svg/blueCurrency.svg'
  import orangeCurrencyIcon from './assets/svg/orangeCurrency.svg'

	import { executeClient } from '@api/rage'
	import { onMount } from 'svelte';

	let images = {
		date: dateIcon,
		close: closeIcon,
		telegram: telegramIcon,
		discord: discordIcon,
		youtube: youtubeIcon,
		calendar: calendarIcon,
		item: itemImg,
		blueCurrency: blueCurrencyIcon,
    orangeCurrency: orangeCurrencyIcon
	}

	const getImageSrc = (imageName) => images[imageName] || ''

	// data social link
	let socialBlocks = [
		{
			id: 1,
			name: 'Telegram',
			icon: 'telegram',
			coins: 2322,
			currency: true,
			description: 'Подпишитесь на наш Telegram канал и получите бонус!',
			link: '',
			isAvailable: false
		},
		{
			id: 2,
			name: 'Discord',
			icon: 'discord',
			coins: 'Рюкзак Prada',
			currency: null,
			description: 'Подпишитесь на наш Discord для бонуса!',
			link: '',
			isAvailable: false
		},
		{
			id: 3,
			name: 'YouTube',
			icon: 'youtube',
			coins: 1222,
			currency: false,
			description: 'Посмотрите видео и получите бонус!',
			link: '',
			isAvailable: false
		}
	]

	// object social
	window.social = function (id, reward) {
		const block = socialBlocks.find((b) => b.id === id)
		if (block) {
			block.coins = `${reward}`
			socialBlocks = [...socialBlocks]
		}
	}

	// event to get social
	const openLink = () => {
		executeClient('cef:client:getRewardSocial', (id, reward) => {
			window.social(id, reward)
		})
	}

	// data rewards list
	let rewards = [
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 3,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 5,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 5,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 5,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 5,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 5,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 5,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 5,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 1,
			type: 0,
			status: 0,
			rarity: 0,
			count: 1,
			price: 100,
			currency: true,
			name: 'Кольцо',
			day: 1,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/asbo.png", "https://cdn.majestic-files.com/img/vehicles/verus.png", "https://cdn.majestic-files.com/img/vehicles/issi2.png"],
			typeLink: "vehicles"
		},
		{
			id: 2,
			type: 1,
			status: 1,
			rarity: 1,
			count: 20,
			price: 450,
			currency: true,
			name: 'Ожерелье',
			day: 10,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/verus.png"],
			typeLink: "vehicles"
		},
		{
			id: 3,
			type: 0,
			status: 3,
			rarity: 4,
			count: 4,
			price: 300,
			currency: true,
			name: 'Рюкзак',
			day: 15,
			category: 'Аксессуары',
			images: ["https://cdn.majestic-files.com/img/vehicles/verus.png"],
			typeLink: "vehicles"
		},
	]

	let date, time

	let activeType = 0

	$: filteredRewards = rewards.filter((reward) => reward.type === activeType)

	const setActiveType = (type) => {
		activeType = type
	}

	let isImageLoading = {};

	function initImageLoading(id) {
		isImageLoading[id] = true;
	}

	function handleImageLoad(id) {
		isImageLoading[id] = false;
	}

	function checkImages(reward) {
		if (reward.images.length > 0) {
			const img = new Image();
			img.src = reward.images[0];
			img.onload = () => handleImageLoad(reward.id);
			img.onerror = () => {
				initImageLoading(reward.id);
			};
		} else {
			isImageLoading[reward.id] = false;
		}
	}

	onMount(() => {
		rewards.forEach(reward => {
			initImageLoading(reward.id);
			checkImages(reward);
		});
	});

	$: filteredRewards.forEach(reward => {
    initImageLoading(reward.id);
  });

	$: {
		if (filteredRewards.length > 0) {
			filteredRewards.forEach(reward => {
				initImageLoading(reward.id); 
				checkImages(reward); 
			});
		}
	}

  window.updateReward = function (reward) {
    if (Array.isArray(reward)) {
        reward.forEach(r => {
            const existingRewardIndex = rewards.findIndex((rItem) => rItem.id === r.id);
            
            if (existingRewardIndex !== -1) {
                rewards[existingRewardIndex] = { ...rewards[existingRewardIndex], ...r };
            } else {
                rewards.push(r);
            }
        });
    } else {
        const existingRewardIndex = rewards.findIndex((rItem) => rItem.id === reward.id);
        
        if (existingRewardIndex !== -1) {
            rewards[existingRewardIndex] = { ...rewards[existingRewardIndex], ...reward };
        } else {
            rewards.push(reward);
        }
    }
	};

	let dateInfo = {
		date: '19/10/2024',
		time: '16:51'
	}

	window.updateDateInfo = function (_date, _time) {
		date = _date;
		time = _time
	}

	let isModalPassVisible = false

	const showModalPass = () => {
		isModalPassVisible = true
	}

	const closeModalPass = () => {
		isModalPassVisible = false
	}

	let isModalItemVisible = false
	let selectedReward = { id: null, name: '', category: '', rarity: null, price: null, images: [], currency: null, type: null};

	const showModalItem = (id, name, category, rarity, price, images, currency, type) => {
		selectedReward = { id, name, category, rarity, price, images, currency, type};
		isModalItemVisible = true;
	};

	const closeModalItem = () => {
		isModalItemVisible = false
	}

	// colors list of rarity
	const getRarityColor = (rarity) => {
    switch(rarity) {
      case 0:
        return 'rgb(218, 61, 61)';
      case 1:
        return 'rgb(29, 99, 230)';
      case 2:
        return 'rgb(116, 230, 29)';
      case 3:
        return 'rgb(255, 255, 255)';
      case 4:
        return 'rgb(218, 163, 61)';
      case 5:
        return 'rgb(190, 29, 230)';
      default:
        return 'transparent';
    }
  };

	function formatNumber(value) {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
</script>

<div class="DailyReward">
	<div class="container">
		<div class="effect"></div>
		<div class="header">
			<div class="mainHeader">
				<div class="title">
					<div class="nameOfTitle">
						<div class="defaultTitle">
							<span>Ежедневный</span>
						</div>
						<div class="customTitle">
							<span>Бонус</span>
							<div class="backgroundLight">
								<span>Бонус</span>
							</div>
						</div>
					</div>
					<div class="description">
						<span>Меню ежедневного бонуса нашего сервера!</span>
					</div>
				</div>
				<div class="date">
					<div class="iconDate">
						<img src={getImageSrc('date')} alt="" />
					</div>
					<div class="timerReward">
						<div class="defaultTitle">
							<span>Следующий приз:</span>
						</div>
						<div class="titleDate">
							<span>{dateInfo.date}</span>
							<span>{dateInfo.time}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="close">
				<div class="title">
					<span>Закрыть</span>
				</div>
				<div class="iconClose">
					<img src={getImageSrc('close')} alt="" />
				</div>
			</div>
		</div>
		<div class="rewards">
			<div class="rewardList">
				<div class="chooseHeader">
					<div class="chooseType">
						<div class="cellType" class:active={activeType === 0} on:click={() => setActiveType(0)}>
							<span>Free</span>
						</div>
						<div class="cellType" class:active={activeType === 1} on:click={() => setActiveType(1)}>
							<span>Premium</span>
						</div>
					</div>
					<div class="buyDailyReward" on:click={showModalPass}>
						<span>Приобрести</span>
					</div>
				</div>
				<div class="rewardRoster">
					{#each filteredRewards as reward}
						<div class="rewardCell">
							<div class="rewardItemCell" style="border-color: {reward.rarity === 4 ? 'rgb(218, 163, 61)' : '#1E1E1E'}">
								<div class="rewardItemStatusBlur" style="background-color: {getRarityColor(reward.rarity)}"></div>
								<div class="rewardItemImage">
									{#if isImageLoading[reward.id]}
										<div class="load">
											<img src={loadingGif} alt="">
										</div>
									{:else if reward.images.length > 0}
										<img src={reward.images[0]} alt="">
									{/if}
								</div>
								<div class="rewardItemTopLine">
									<div class="rewardItemQuantity"><span>{reward.count} шт.</span></div>
									<div class="rewardItemQuality" style="background-color: {getRarityColor(reward.rarity)}"></div>
								</div>
								<div class="rewardItemBottomLine">
									<div class="rewardItemNaming">
										<div class="rewardItemName"><span>{reward.name}</span></div>
										<div class="rewardItemCategory"><span>{reward.category}</span></div>
									</div>
									<div class="rewardItemDay">
										<div class="rewardItemDayIcon"><img src={getImageSrc('calendar')} alt="" /></div>
										<div class="rewardItemDayValue"><span>День {reward.day}</span></div>
									</div>
								</div>
							</div>
							{#if reward.status === 0}
							<div class="rewardButtonKeepCell" on:click={() => showModalItem(reward.id, reward.name, reward.category, reward.rarity, reward.price, reward.images, reward.currency, reward.type)}>
								<span>Забрать</span>
							</div>
							{:else if reward.status === 1}
								<div class="rewardButtonReceivedCell">
									<span>Получено</span>
								</div>
							{:else}
								<div class="rewardButtonUnavailableCell">
									<span>Недоступно</span>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
			<div class="rewardLink">
				<div class="mainHeader">
					<div class="title">
						<div class="nameOfTitle">
							<div class="defaultTitle">
								<span>Ежедневный</span>
							</div>
							<div class="customTitle">
								<span>Бонус</span>
								<div class="backgroundLight">
									<span>Бонус</span>
								</div>
							</div>
						</div>
						<div class="description">
							<span>Забирайте дополнительные призы переходя по нашим ссылкам!</span>
						</div>
					</div>
				</div>
				<div class="listLink">
					{#each socialBlocks as block}
						<div class="social">
							<div class="cellLink">
								<div class="logoLink">
									<img src={getImageSrc(block.icon)} alt="" />
									<div class="blurLogo">
										<img src={getImageSrc(block.icon)} alt="" />
									</div>
								</div>
								<div class="descriptionLink">
									<div class="titleLink">
										<span>{block.name}</span>
									</div>
									<div class="rewardType">
										<div class="rewardTypeWrapper">
											<span>{formatNumber(block.coins)}</span>
											{#if block.currency == true}
												<img src={getImageSrc('blueCurrency')} alt="">
												<span>Сoins</span>
											{:else if block.currency == false}
												<img src={getImageSrc('orangeCurrency')} alt="">
												<span>Сoins</span>
											{/if}
										</div>
									</div>
									<div class="descriptionTitle">
										<span>{block.description}</span>
									</div>
								</div>
							</div>
							{#if block.isAvailable}
								<div class="buttonAvailable" on:click={() => openLink(block.id, block.coins)}>
									<span>Перейти</span>
								</div>
							{:else if !block.isAvailable}
								<div class="buttonUnvailable">
									<span>Недоступно</span>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	{#if isModalPassVisible}
		<div class="modalPassContainer">
			<ModalPass closeModalPass={closeModalPass} />
		</div>
	{/if}
	{#if isModalItemVisible}
	<div class="modalItemContainer">
		<ModalItem closeModalItem={closeModalItem} 
			id={selectedReward.id} name={selectedReward.name} category={selectedReward.category} rarity={selectedReward.rarity} 
			price={selectedReward.price} images={selectedReward.images} currency={selectedReward.currency} type={selectedReward.type}
		/>
	</div>
	{/if}
</div>
