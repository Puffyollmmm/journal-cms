<template>
  <footer class="bg-black text-white py-16 px-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo and Description -->
      <div class="col-span-1">
        <h2 class="text-2xl font-bold mb-4">Journal CMS</h2>
        <p class="text-gray-400">A personal space to write, reflect, and grow.</p>
      </div>

      <!-- Quick Links -->
      <div class="col-span-1">
        <h3 class="font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Explore</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div class="col-span-1">
        <h3 class="font-semibold mb-4">Legal</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
        </ul>
      </div>

      <!-- Follow Us -->
      <div class="col-span-1">
        <h3 class="font-semibold mb-4">Follow Us</h3>
        <div class="flex space-x-4">
          <!-- Replace with actual icons -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Facebook</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
      <p>&copy; {{ new Date().getFullYear() }} Journal CMS. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed for this static component yet.
</script>

<style scoped>
/* Add any component-specific styles here */
</style>