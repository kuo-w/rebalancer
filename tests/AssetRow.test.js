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

describe("Symbol Input", () => {
  test("has error on invalid input", () => {
    const wrapper = mount(AssetRow);
    const symbol = wrapper.find('input[name="symbol"]');
    expect(symbol.exists()).toBe(true);
    symbol.setValue("1");
    expect(wrapper.vm.$v.asset.symbol.$error).toBe(true);
    symbol.setValue("@");
    expect(wrapper.vm.$v.asset.symbol.$error).toBe(true);
  });

  test("has no error on valid input", () => {
    const wrapper = mount(AssetRow);
    const symbol = wrapper.find('input[name="symbol"]');
    expect(symbol.exists()).toBe(true);
    symbol.setValue("cdn");
    expect(wrapper.vm.$v.asset.symbol.$error).toBe(false);
    symbol.setValue("cdn.");
    expect(wrapper.vm.$v.asset.symbol.$error).toBe(false);
    symbol.setValue("cdn.cdn");
    expect(wrapper.vm.$v.asset.symbol.$error).toBe(false);
    symbol.setValue(".cdn");
    expect(wrapper.vm.$v.asset.symbol.$error).toBe(false);
  });
});
