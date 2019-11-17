<template>
  <div>
    <label
      ref="label"
      :class="[dragging ? 'dragging' : '', uploading ? 'uploading' : '']"
      @dragenter="dragEnter"
      @dragover="dragOver"
      @dragleave="dragLeave"
      @drop="drop"
    >
      {{ uploading ? "Uploading..." : "Drag image here..." }}
      <input type="file" @change="onChange" />
    </label>
  </div>
</template>

<style lang="less" scoped>
div {
  margin: 5px;

  label {
    cursor: pointer;
    display: block;
    padding: 10px;
    background: #ddd;
    border-radius: 4px;
    transition: opacity 0.3s, background-color 0.3s;

    &.dragging,
    &:hover {
      background: #ccc;
    }
    &.uploading {
      background: #80d1de;
      opacity: 0.6;
      cursor: default;
    }
  }

  input {
    width: 1px;
    height: 1px;
    opacity: 0.01;
    overflow: hidden;
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      selectedFiles: [],
      api: "",
      dragging: false,
      uploading: false
    };
  },
  props: {
    testId: String,
    variation: Number
  },
  mounted() {
    this.api = `${process.env.VUE_APP_API_ENDPOINT}/test/${this.testId}/${this.variation}/screenshot`;
  },
  methods: {
    onChange: function(e) {
      const files = e.target.files;
      this.upload(files);
    },
    upload: async function(files) {
      let formData = new FormData();
      formData.append("file", files[0]);

      const resp = await fetch(this.api, {
        method: "POST",
        body: formData
      });
      console.log(resp);
    },
    dragEnter: function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.dragging = true;
    },
    dragOver: function(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    dragLeave: function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.dragging = false;
    },
    drop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.dragging = false;

      const dt = e.dataTransfer;
      const files = dt.files;

      this.upload(files);
    }
  }
};
</script>
