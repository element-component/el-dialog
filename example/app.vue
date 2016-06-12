<style>
  span.dialog-footer button:first-child{
    margin-right: 10px;
  }
</style>

<script>
  import Vue from 'vue';
  import ElDialog from './../src/index';

  Vue.use(ElDialog);

  export default {
    name: 'app',

    template: require('./demo.md'),

    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>
