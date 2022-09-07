<template>
  <div class="add-form__container">
    <form @input="checkForm" class="add-form__form">
      <form-input
          type="text"
          :required="true"
          name="nameProduct"
          text="Наименование товара"
          placeholder="Введите наименование товара"
          :textArea="false"
          v-model="name"
      />
      <form-input
          type="text"
          :required="false"
          name="descriptionProduct"
          text="Описание товара"
          placeholder="Введите описание товара"
          :textArea="true"
      />
      <form-input
          type="url"
          :required="true"
          name="urlProduct"
          text="Ссылка на изображение товара"
          placeholder="Введите ссылку"
          :textArea="false"
          pattern="https://.*"
      />
      <form-input
          type="numb"
          :required="true"
          name="priceProduct"
          text="Цена товара"
          placeholder="Введите цену"
          :textArea="false"
          pattern="https://.*"
      />
      <button type="submit" class="add-form__button-submit" :disabled="disabled">Добавить товар</button>
    </form>
  </div>
</template>
<script>
import FormInput from "@/components/addForm/formInput";
export default {
  name: "addForm",
  components: { FormInput },
  data () {
    return {
      errors: {},
      disabled: true
    }
  },
  methods: {
    checkForm (e) {
      e.currentTarget.querySelectorAll('.add-form__input').forEach((item) => {
        if(item.value.length > 0) {
          this.errors[item.name] = 1
        } else {
          this.errors[item.name] = 0
        }
      })
      this.disabled = !Object.keys(this.errors).every((val,) => this.errors[val] === 1);
    }
  }
}
</script>

<style lang="sass" scoped>
.add-form__form
  max-width: 332px
  display: flex
  flex-direction: column
  gap: 16px
  padding: 24px
  box-sizing: border-box
  background: #FFFEFB
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
.add-form__button-submit
  font-family: 'Inter', sans-serif
  font-style: normal
  font-weight: 600
  font-size: 12px
  line-height: 15px
  border: none
  outline: none
  background: #7BAE73
  border-radius: 10px
  padding: 10px 0
  color: #FFFFFF
  &:disabled
    background: #EEEEEE
    color: #B4B4B4
</style>
