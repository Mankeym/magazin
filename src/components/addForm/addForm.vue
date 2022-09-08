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
          type="text"
          :required="true"
          name="priceProduct"
          text="Цена товара"
          placeholder="Введите цену"
          :textArea="false"
      />
      <button @click="submitForm" class="add-form__button-submit" :disabled="disabled">Добавить товар</button>
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
      formData: {
        nameProduct: '',
        descriptionProduct: '',
        urlProduct: '',
        priceProduct: ''
      },
      disabled: true
    }
  },
  methods: {
    checkForm (e) {
      e.currentTarget.querySelectorAll('.add-form__input').forEach((item) => {
        if(item.name === 'urlProduct') {
          const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
              '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
          pattern.test(item.value) ? this.errors[item.name] = 1 : this.errors[item.name] = 0
        } else {
          if(item.value.length > 0) {
            this.errors[item.name] = 1
          } else {
            this.errors[item.name] = 0
          }
        }
      })
      this.disabled = !Object.keys(this.errors).every((val,) => this.errors[val] === 1);
    },
    submitForm (e) {
      e.preventDefault()
      if(localStorage.getItem('productArray')){
        this.formData['nameProduct'] = document.getElementsByName('nameProduct')[0].value
        this.formData['descriptionProduct'] = document.getElementsByName('descriptionProduct')[0].value
        this.formData['urlProduct'] = document.getElementsByName('urlProduct')[0].value
        this.formData['priceProduct'] = document.getElementsByName('priceProduct')[0].value
        console.log(document.getElementsByName('priceProduct')[0].value.replace(/\s/g,''))
        const data = JSON.parse(localStorage.getItem('productArray'))
        this.formData['id'] = Math.floor(Math.random() * 10000)
        data.push(this.formData)
        localStorage.setItem('productArray', JSON.stringify(data))
        this.$store.dispatch('addProductItemStore', data)
        document.getElementsByTagName('form')[0].reset()
        this.disabled = true
      } else {
        const data = []
        this.formData['nameProduct'] = document.getElementsByName('nameProduct')[0].value
        this.formData['descriptionProduct'] = document.getElementsByName('descriptionProduct')[0].value
        this.formData['urlProduct'] = document.getElementsByName('urlProduct')[0].value
        this.formData['priceProduct'] = document.getElementsByName('priceProduct')[0].value.split(' ').join('')
        data.push(this.formData)
        data[0]['id'] = Math.floor(Math.random() * 10000)
        localStorage.setItem('productArray', JSON.stringify(data))
        this.$store.dispatch('addProductItemStore', data)
        document.getElementsByTagName('form')[0].reset()
        this.disabled = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.add-form__container
  max-width: 332px
  width: 100%
.add-form__form
  position: sticky
  top: 20px
  max-width: 332px
  display: flex
  flex-direction: column
  gap: 5px
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
  cursor: pointer
  transition: .35s
  &:hover
    transform: scale(1.1)
  &:disabled
    background: #EEEEEE
    color: #B4B4B4
    cursor: default
    &:hover
      transform: scale(1)
</style>
