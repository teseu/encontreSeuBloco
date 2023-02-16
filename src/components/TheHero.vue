<template>
  <div>
    <div class="content w-full bg-white relative h-96">
      <div class="hero__title">
        <div class="find">Find your block</div>
        <div class="encontre">
          Encontre os <span>melhores blocos</span> de carnaval de 2023
        </div>
        <div class="form__container">
          <form class="form">
            <div class="input-container">
              <input type="text">
            </div>
            <div class="input-container">
              <select name="cidade" id="cidade">
                <option value="">Selecione uma cidade</option>
              </select>
            </div>
            <div class="input-container">
              <button class="purple">
                Buscar agora
              </button>
            </div>
          </form>
        </div>
      </div>
      <img class="absolute top-0 left-0" src="../assets/img/ilustra-01.svg" alt="penas">
      <img class="absolute bottom-0 right-0" src="../assets/img/ilustra-02.svg" alt="mulher dançando">
    </div>
  </div>
</template>
