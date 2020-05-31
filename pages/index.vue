<template>
  <div>

    <nav class="navbar navbar-light bg-light fixed-top">
      <nuxt-link to="/" class="navbar-brand">請求書作成アプリ</nuxt-link>
    </nav>

    <div class="container" style="margin-top: 70px;">
      <div class="form-group row">
        <div class="col-6">
          <button @click.prevent="saveCondition()" class="btn btn-dark">情報保存</button>
        </div>
        <div class="col-6">
          <button @click.prevent="loadCondition()" class="btn btn-light">情報ロード</button>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-12">
          <button @click.prevent="goToPrintPage()" class="btn btn-primary">請求書生成</button>
        </div>
      </div>

      <div class="form-group row">
        <label for="date" class="col-12 col-form-label">請求日</label>
        <div class="col-12">
          <input class="form-control" type="date" id="date" v-model="formData.date">
        </div>
      </div>

      <div class="form-group row">
        <label for="number" class="col-12 col-form-label">請求番号</label>
        <div class="col-12">
          <input class="form-control" type="text" id="number" v-model="formData.number">
        </div>
      </div>

      <div class="form-group row">
        <label for="name" class="col-12 col-form-label">お名前</label>
        <div class="col-12">
          <input class="form-control" type="text" id="name" v-model="formData.name">
        </div>
      </div>

      <div class="form-group row">
        <label for="zipcode" class="col-12 col-form-label">郵便番号</label>
        <div class="col-12">
          <input class="form-control" type="text" id="zipcode" v-model="formData.zipcode" @change="resolveAddress()">
        </div>
      </div>

      <div class="form-group row">
        <label for="address1" class="col-12 col-form-label">アドレス１</label>
        <div class="col-12">
          <input class="form-control bg-light" type="text" id="address1" v-model="formData.address1" readonly="true">
        </div>
      </div>

      <div class="form-group row">
        <label for="address2" class="col-12 col-form-label">アドレス２</label>
        <div class="col-12">
          <input class="form-control" type="text" id="address2" v-model="formData.address2">
        </div>
      </div>


      <div class="form-group row">
        <label for="client" class="col-12 col-form-label">クライアント名</label>
        <div class="col-12">
          <textarea class="form-control" id="client" v-model="formData.client" rows="3"></textarea>
        </div>
      </div>

      <div class="form-group row">
        <label for="terms" class="col-12 col-form-label">請求期間</label>
        <div class="col-12">
          <input class="form-control" type="text" id="terms" v-model="formData.terms">
        </div>
      </div>


      <div class="form-group row">
        <label for="bank" class="col-12 col-form-label">銀行名</label>
        <div class="col-12">
          <input class="form-control" type="text" id="bank" v-model="formData.bank">
        </div>
      </div>


      <div class="form-group row">
        <label for="branch" class="col-12 col-form-label">支店名</label>
        <div class="col-12">
          <input class="form-control" type="text" id="branch" v-model="formData.branch">
        </div>
      </div>


      <div class="form-group row">
        <label for="account" class="col-12 col-form-label">口座番号</label>
        <div class="col-12">
          <input class="form-control" type="text" id="account" v-model="formData.account">
        </div>
      </div>


      <div class="form-group row">
        <label for="deadline" class="col-12 col-form-label">お支払い期限</label>
        <div class="col-12">
          <input class="form-control" type="text" id="deadline" v-model="formData.deadline">
        </div>
      </div>

      <div class="dropdown-divider"></div>

      <div class="form-group row" v-for="(item, idx) in formData.list">
        <label class="col-12 col-form-label">
          <span>請求情報{{ idx+1 }}</span>
          <button v-if="idx > 0" @click.prevent="deleteList(idx)" class="btn btn-danger">請求情報削除</button>
        </label>
        <div class="col-12">
          <input class="form-control" type="text" v-model="formData.list[idx].title" placeholder="品番•品名">
        </div>

        <div class="col-12">
          <input class="form-control" type="number" v-model="formData.list[idx].quantity" placeholder="数量">
        </div>

        <div class="col-12">
          <input class="form-control" type="text" v-model="formData.list[idx].unit" placeholder="単位">
        </div>

        <div class="col-12">
          <input class="form-control" type="number" v-model="formData.list[idx].price" placeholder="金額">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-12">
          <button @click.prevent="addList()" class="btn btn-primary">請求情報追加</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import KenAll from 'ken-all';
import jsPDF from 'jspdf';

export default {
  components: {
  },
  data() {
    return {
      formData: {
        date: '',
        number: '',
        name: '',
        zipcode: '',
        address1: '',
        address2: '',
        client: '',
        terms: '',
        bank: '',
        branch: '',
        account: '',
        deadline: '',
        list: [
          { title: '', quantity: '', unit: '', price: '' },
        ],
      },


      errors: null,
    }
  },
  methods: {
    resolveAddress: async function () {
      let address = await KenAll(this.formData.zipcode)
        .then(data => data.pop())
        .catch(() => null);

      if (!address) {
        this.formData.address1 = '';
        return;
      }

      this.formData.address1 = address.join('');
    },
    addList: function () {
      if (this.formData.list.length == 10) {
        alert('10個まで作成可能です。');
        return;
      }
      this.formData.list.push({ title: '', quantity: '', unit: '', price: '' });
    },
    deleteList: function (idx) {
      this.formData.list.splice(idx, 1);
    },
    saveCondition: function () {
      this.$cookies.set('invoice-conditions', this.formData);
    },
    loadCondition: function () {
      this.formData = this.$cookies.get('invoice-conditions');
      this.resolveAddress();
    },
    goToPrintPage: function () {
      this.$store.commit('setFormData', this.formData);
      this.$router.push({ name: 'print', force: true });
    }
  }
}
</script>
