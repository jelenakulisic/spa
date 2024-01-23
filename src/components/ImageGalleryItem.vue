<template>
    <div class="image-item" @click="handleClick">
      <img :src="image.url" :alt="image.description" />
      <div v-if="showInfo" class="image-info">
        <h2>{{ image.title }}</h2>
        <p>{{ image.description }}</p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showInfo: false,
      };
    },
    props: {
      image: Object,
    },
    methods: {
      handleClick() {
        this.showInfo = !this.showInfo;
      },
    },
  };
  </script>
  
  <style scoped>
  .image-item {
    cursor: pointer;
    width: 50%;
    height: 200px;
    

  }
  .image-item img {
    width: 100%;
    height: auto;
    display: block;
  }

  .image-info {
    padding: 10px;
    background-color: rgba(49, 80, 0, 0.8);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: none;
  }

  .image-item:hover .image-info {
    display: block;
  }
  
  </style>