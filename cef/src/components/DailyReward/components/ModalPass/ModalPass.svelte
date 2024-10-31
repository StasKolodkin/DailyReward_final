<script>
	import './style.sass'
  import diamondIcon from "./assets/svg/diamond.svg"
  import freeIcon from "./assets/svg/free.svg"
  import blueCurrencyIcon from '../../assets/svg/blueCurrency.svg'
  import orangeCurrencyIcon from '../../assets/svg/orangeCurrency.svg'

  import { executeClient } from '@api/rage'

  export let closeModalPass;

  let images = {
		diamond: diamondIcon,
    free: freeIcon,
    blueCurrency: blueCurrencyIcon,
    orangeCurrency: orangeCurrencyIcon
	}

  let value, currency

  let priceInfo = {
    value: 300,
    currency: false
  }

  const getImageSrc = (imageName) => images[imageName] || ''

  window.updatePriceInfo = function (_value, _currency) {
		value = _value;
		currency = _currency
	}

  const handleClick  = () => {
    closeModalPass();
  };

  const pickPass = () => {
    executeClient("cef:client:pickPass")
  };

  const buyPass = () => {
    executeClient("cef:client:buyPass")
  };
</script>

<div class="ModalPass">
  <div class="ModalPassOverlay" on:click={handleClick}></div>
  <div class="ModalPassWrapper">
    <div class="headerPass">
      <div class="titleHeaderPass">
        <div class="defaultTitle">
          <span>Приобрети</span>
        </div>
        <div class="customTitle">
          <span>Ежедневный пропуск</span>
          <div class="backgroundLight">
            <span>Ежедневный пропуск</span>
          </div>
        </div>
      </div>
      <div class="descriptionHeaderPass">
        <span>Вы можете приобрести платный боевой пропуск и получать премиальные призы!</span>
      </div>
    </div>
    <div class="bodyPass">
      <div class="blocksPass">
        <div class="blockPass">
          <div class="topBlockPass">
            <div class="headerBlockPass">
              <div class="iconHeader">
                <img src={getImageSrc('free')} alt="" />
              </div>
              <div class="titleHeader"><span>Стартовый пропуск</span></div>
            </div>
            <div class="descriptionBlockPass">
              <div class="descriptionCell">
                <span>Возможность получить обычные награды из верхней ленты призов за очки опыта.</span>
              </div>
              <div class="descriptionCell">
                <span>Доступ к премиум наградам из нижней ленты призов можно купить в любое время.</span>
              </div>
            </div>
          </div>
          <div class="bottomBlockPass">
            <div class="buttonWrapper">
              <div class="buttonBlock" on:click={handleClick}>
                <span id="light">Оставить</span>
                <span id="bold">Стартовый пропуск</span>
              </div>
            </div>
          </div>
        </div>
        <div class="blockPass">
          <div class="topBlockPass">
            <div class="headerBlockPass">
              <div class="iconHeader">
                <img src={getImageSrc('diamond')} alt="" />
              </div>
              <div class="titleHeader"><span>Ежедневный пропуск</span></div>
            </div>
            <div class="descriptionBlockPass">
              <div class="descriptionCell">
                <span>Возможность получить обычные награды + премиум награды из нижней ленты призов до 132 уровня за очки опыта.</span>
              </div>
            </div>
          </div>
          <div class="bottomBlockPass">
            <div class="buttonWrapper">
              <div class="buttonBlock" on:click={buyPass}>
                <span id="light">Приобрести за</span>
                <span id="bold">{priceInfo.value}</span>
                {#if priceInfo.currency == true}
                  <img src={getImageSrc('blueCurrency')} alt="">
                {:else if priceInfo.currency == false}
                  <img src={getImageSrc('orangeCurrency')} alt="">
                {/if}
                <span id="bold">Coins</span>
              </div>
              <div class="buttonBlock" on:click={pickPass}>
                <span id="light">Забрать</span>
                <span id="bold">Ежедневный пропуск</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>