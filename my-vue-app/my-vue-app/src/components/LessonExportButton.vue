<!-- src/components/LessonExportButton.vue -->

<template>
    <div>
      <button @click="exportLesson">Export Lesson</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      exportLesson() {
        const lessonId = 'ch39idk1'; // Replace with the actual lessonId
  
        // Run the slidev export command
        const command = `npx slidev export Markdown/${lessonId}.md`;
  
        // Use child_process to run the command
        const { exec } = require('child_process');
  
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
          }
          console.log(`Slide export successful for Lesson ${lessonId}`);
          console.log(`Command output: ${stdout}`);
        });
      },
    },
  };
  </script>
  