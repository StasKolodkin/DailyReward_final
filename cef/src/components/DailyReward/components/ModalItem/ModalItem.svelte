<script>
	import './style.sass'
  import { executeClient } from '@api/rage'

  import leftArrowIcon from './assets/svg/leftArrow.svg'
  import rightArrowIcon from './assets/svg/rightArrow.svg'
  import blueCurrencyIcon from '../../assets/svg/blueCurrency.svg'
  import orangeCurrencyIcon from '../../assets/svg/orangeCurrency.svg'

  let arrow = {
		leftArrow: leftArrowIcon,
    rightArrow: rightArrowIcon,
    blueCurrency: blueCurrencyIcon,
    orangeCurrency: orangeCurrencyIcon
	}

	const getImageSrc = (imageName) => arrow[imageName] || ''

  export let closeModalItem;
  export let name;
  export let category;
  export let id;
  export let rarity;
  export let price;
  export let images;
  export let currency;
  export let type;

  const handleClick  = () => {
    closeModalItem();
  };

  const pickItem = (id) => {
    console.log(id, currentImageIndex, type)
    executeClient("cef:client:pickItem", id, currentImageIndex, type)
  };

  const sellItem = (id) => {
    console.log(id, currentImageIndex, type)
    executeClient("cef:client:sellItem", id, currentImageIndex, type)
  };

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

  let currentImageIndex = 0;

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = images.length - 1;
    }
  };

  const showNextImage = () => {
    console.log(images)
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
  };

  $: currentImage = images[currentImageIndex]; 
</script>

<div class="ModalItem">
  <div class="ModalItemOverlay" on:click={handleClick}></div>
  <div class="ModalItemBlur" style="background-color: {getRarityColor(rarity)}"></div>
  <div class="ModalItemBlock">
    <div class="ModalItemBlockBlur" style="background-color: {getRarityColor(rarity)}"></div>
    <div class="ModalItemBlockWrapper">
      <div class="topModalItem">
        <div class="rewardItemQuality" style="background-color: {getRarityColor(rarity)}"></div>
      </div>
      <div class="topMidModalItem">
        {#if images.length > 1}
          <div class="leftArrowBlock" on:click={showPreviousImage}>
            <img src={getImageSrc('leftArrow')} alt="" />
          </div>
        {/if}
        <div class="imageBlock">
          <img src={currentImage} alt="">
        </div>
        {#if images.length > 1}
          <div class="rightArrowBlock" on:click={showNextImage}>
            <img src={getImageSrc('rightArrow')} alt="" />
          </div>
        {/if}
      </div>
      <div class="bottomMidModalItem">
        <div class="nameModalItem">
          <span>{name}</span>
        </div>
        <div class="categoryModalItem">
          <span>{category}</span>
        </div>
      </div>
      <div class="bottomModalItem">
        <div class="buttonModalItem" on:click={() => pickItem(id)}>
          <span id="light">Забрать себе</span>
        </div>
        <div class="buttonModalItem" on:click={() => sellItem(id)}>
          <span id="light">Продать за</span>
          <span id="bold">{price}</span>
          {#if currency == true}
            <img src={getImageSrc('blueCurrency')} alt="">
          {:else if currency == false}
            <img src={getImageSrc('orangeCurrency')} alt="">
          {/if}
          <span id="bold">Coins</span>
        </div>
      </div>
    </div>
  </div>
</div>