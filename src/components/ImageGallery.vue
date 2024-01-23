<template>
    <div>
      <image-gallery-item v-for="image in images" :key="image.id" :image="image" />
      <p class="number">Number of photos in the gallery: {{ ukupanBrojSlika }}</p>
    </div>
  </template>
  
  <script>
  import ImageGalleryItem from './ImageGalleryItem.vue';
  
  export default {
    components: {
      ImageGalleryItem,
    },
    data() {
      return {
        images: [
          { id: 1, url: 'src/assets/Van_Gogh -  Starry_Night.jpeg', description: 'Starry Night - Van Gogh' },
          { id: 2, url: 'src/assets/Irises-Vincent_van_Gogh.jpg', description: 'Irises - Van Gogh' },
          { id: 3, url: 'src/assets/GirlBeforeAMirror.jpeg', description: 'Girl Before A Mirror - Picasso' },
          { id: 4, url: 'src/assets/Picasso - Three Musicians.jpeg', description: 'Three Musicians - Picasso' },
        ],
      };
    },
    computed: {
        ukupanBrojSlika() {
          return this.images.length;
        },
    },
  };
  </script>
  
  <style scoped>
  .number{
    position: fixed;
    bottom: 2px;
    left: 2px;
    padding: 10px;
    background-color: rgba(29, 29, 29, 0.8);
}
  
  </style>
  