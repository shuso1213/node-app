<script setup lang="ts">
import { ref, onMounted } from 'vue';

const message = ref(''); // API からのメッセージを格納

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/message');
    const data = await res.json();
    message.value = data.message; // 画面に表示
  } catch (err) {
    console.error(err);
    message.value = 'Failed to fetch message';
  }
});
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>