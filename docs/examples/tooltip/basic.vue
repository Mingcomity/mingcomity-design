<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <mc-button>top-start</mc-button>
      </mc-tooltip>
      <mc-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <mc-button>top</mc-button>
      </mc-tooltip>
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <mc-button>top-end</mc-button>
      </mc-tooltip>
    </div>
    <div class="row">
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <mc-button>left-start</mc-button>
      </mc-tooltip>
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <mc-button>right-start</mc-button>
      </mc-tooltip>
    </div>
    <div class="row">
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <mc-button class="mt-3 mb-3">left</mc-button>
      </mc-tooltip>
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <mc-button>right</mc-button>
      </mc-tooltip>
    </div>
    <div class="row">
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <mc-button>left-end</mc-button>
      </mc-tooltip>
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <mc-button>right-end</mc-button>
      </mc-tooltip>
    </div>
    <div class="row center">
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <mc-button>bottom-start</mc-button>
      </mc-tooltip>
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <mc-button>bottom</mc-button>
      </mc-tooltip>
      <mc-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <mc-button>bottom-end</mc-button>
      </mc-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin: 4px;
  margin-top: 10px;
}
.mc-tooltip {
  text-align: center;
}
</style>
