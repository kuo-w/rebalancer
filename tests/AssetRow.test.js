import Vuelidate from "vuelidate";
import Vue from "vue";
Vue.use(Vuelidate);
import { mount } from "@vue/test-utils";
import AssetRow from "../src/AssetRow.vue";

describe("Component", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(AssetRow);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
