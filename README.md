# Storybook Examples with Pinia + Vue Integration

This repository contains story example (Page.stories, Page.vue )   which can be used as a reference while Integrating Pini/Vue in Storybook
## Getting Started

To get started with the project, simply clone the repository and install the dependencies using the following command:


pnpm install


### Adding Pinia

This project is already set up to work with Vuetify. To add pini in your own project, you can follow these steps:

1. Install pini and its dependencies using `pnpm`:


pnpm add pinia 

2. go to your `preview.ts` file and create your pinia app then pass it to the Vue app:

```ts
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

setup((app:App) => {
  app.use(pinia)
})
```

### Running Storybook

To run the project, use the following command:

```
pnpm storybook
```

### Maintainer

For any queries or suggestions related to this project, please feel free to reach out to the maintainer at javachakir@gmail.com or on Discord at Chak-As3#7479
