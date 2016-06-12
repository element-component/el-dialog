<template>
  <div class="element-dialog" :style="{ width: width + 'px' }" v-show="visible" transition="dialog-bounce">
    <div class="element-dialog__header">
      <span class="element-dialog__title">{{title}}</span>
      <div class="element-dialog__headerbtn">
        <i class="element-dialog__close d-icon d-icon-close" @click='close()'></i>
      </div>
    </div>
    <div class="element-dialog__body"><slot></slot></div>
    <div class="element-dialog__footer"><slot name="footer"></slot></div>
  </div>
</template>

<script>
  import Popup from 'vue-popup';
  require('vue-popup/lib/popup.css');

  export default {
    name: 'el-dialog',

    mixins: [ Popup ],

    props: {
      title: {
        type: String,
        default: ''
      },

      width: {
        default: 600
      },

      modal: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      onOpen() {
        this.$broadcast('onresize');
      }
    }
  };
</script>
