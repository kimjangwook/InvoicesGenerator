<template>
  <div class="page" size="A4" v-if="formData">
    <h1 class="text-center m-3">請求書</h1>


    <div class="row">
      <div class="col-12 mb-5 text-center">
        <span>請求日：{{ formData.date }}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>請求番号：{{ formData.number }}</span>
      </div>

      <div class="col-6">
        <div class="pre-formatted">{{ formData.client }}</div>
      </div>
      <div class="col-6">
        <div>{{ formData.name }}</div>
        <div>〒{{ formData.zipcode.slice(0, 3) }}-{{ formData.zipcode.slice(3) }}</div>
        <div>{{ formData.address1 }}{{ formData.address2 }}</div>
      </div>

      <div class="col-12 mt-3">
        {{ formData.terms }}
      </div>

      <div class="col-12 mt-3">
        <table class="table text-center table-striped">
          <thead>
          <tr>
            <th>品番•品名</th>
            <th>数量</th>
            <th>単位</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in formData.list">
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.unit }}</td>
            <td>{{ yenFormat(item.price) }}</td>
            <td>{{ yenFormat(item.quantity * item.price) }}</td>
          </tr>
          <tr v-for="i in 10 - formData.list.length">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          </tbody>
          <tr class="font-weight-bold">
            <td class="text-right" colspan="4">合計金額(税込)</td>
            <td>{{ yenFormat(getTotalAmount()) }}</td>
          </tr>
        </table>
      </div>

      <div class="col-12">
        <span>振込先:{{ formData.bank }}</span>
        <span class="pl-3">店番号:{{ formData.branch }}</span>
        <span class="pl-3">口座番号:{{ formData.account }} {{ formData.name }}</span>
      </div>
      <div class="col-12">お振込み手数料は御社ご負担にてお願いいたします。</div>
      <div class="col-12">お支払い期限:{{ formData.deadline }}</div>

      <div class="col-12  print-btn mt-5 text-center">
        <button class="btn btn-primary" @click.prevent="downloadInvoiceImage()">請求書ダウンロード</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default {
  computed: {
    ...mapState({
      formData: state => state.formData,
    })
  },
  async fetch() {
    if (!this.formData) {
      window.location.replace('/');
      return;
    }
  },
  fetchOnServer: false,
  methods: {
    yenFormat: function (number) {
      return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number);
    },
    getTotalAmount: function () {
      let amount = 0;
      this.formData.list.forEach(item => {
        amount += item.price * item.quantity;
      });
      return amount;
    },
    downloadInvoiceImage: async function () {
      document.querySelector('.print-btn').setAttribute('data-html2canvas-ignore', 'true');
      let elem = document.querySelector('.page');
      let canvas = await html2canvas(elem, {
        scale: 3,
        scrollX: 0,
        scrollY: -window.scrollY,
      });



      let imgData = canvas.toDataURL('image/png', 1.0);
      let link = document.createElement("a");
      link.download = (new Date().toISOString().slice(0, 10))+'請求書.png';
      link.href = imgData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>
  body {
    background: rgb(204,204,204);
  }
  .page[size="A4"] {
    background: white;
    width: 21cm;
    height: 29.7cm;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5cm;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    border: 1.25cm solid white;
  }
  @media print {
    body, .page[size="A4"] {
      margin: 0;
      box-shadow: 0;
    }
  }
  .pre-formatted {
    white-space: pre-line;
  }

  td, th {
    min-height: 50px;
  }
</style>
