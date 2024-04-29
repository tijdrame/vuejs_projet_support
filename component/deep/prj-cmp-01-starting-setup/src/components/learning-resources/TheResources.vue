<template>
  <base-card>
    <base-button
      @click="setSelectedtab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedtab('add-resource')"
      :mode="addResButtonMode"
      >Add Reource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedtab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
      selectedtab: 'stored-resources',
    };
  },
  //props: ['resources'],
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedtab(tab) {
      this.selectedtab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedtab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
      console.log(this.storedResources.length);
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedtab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedtab === 'add-resources' ? null : 'flat';
    },
  },
};
</script>
