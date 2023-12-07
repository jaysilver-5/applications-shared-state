<!-- src/views/LessonExportPage.vue -->

<template>
    <div>
      <h1>Lesson Export Page</h1>
      <LessonExportButton />
    </div>
  </template>
  
  <script>
  import LessonExportButton from '@/components/LessonExportButton.vue';
  
  export default {
    components: {
      LessonExportButton,
    },
  };
  </script>
  