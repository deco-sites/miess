// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $$$$0 from "./routes/api/[...catchall].tsx";
import * as $$$$1 from "./routes/_app.tsx";
import * as $$$$$0 from "./islands/WishlistButton.tsx";
import * as $$$$$1 from "./islands/ShippingSimulation.tsx";
import * as $$$$$2 from "./islands/HeaderButton.tsx";
import * as $$$$$3 from "./islands/HeaderSearchMenu.tsx";
import * as $$$$$4 from "./islands/AddToCartButton.tsx";
import * as $$$$$5 from "./islands/HeaderModals.tsx";
import * as $$$$$6 from "./islands/SliderJS.tsx";
import * as $$$$$7 from "./islands/ProductImageZoom.tsx";
import * as $$$$$8 from "./islands/SearchControls.tsx";
import * as $$$$$$$$0 from "./sections/WishlistGallery.tsx";
import * as $$$$$$$$1 from "./sections/LinkTree.tsx";
import * as $$$$$$$$2 from "./sections/Features.tsx";
import * as $$$$$$$$3 from "./sections/BannerPLP.tsx";
import * as $$$$$$$$4 from "./sections/BannerGrid.tsx";
import * as $$$$$$$$5 from "./sections/SearchResult.tsx";
import * as $$$$$$$$6 from "./sections/ProductShelf.tsx";
import * as $$$$$$$$7 from "./sections/Footer.tsx";
import * as $$$$$$$$8 from "./sections/CookieConsent.tsx";
import * as $$$$$$$$9 from "./sections/DesignSystem.tsx";
import * as $$$$$$$$10 from "./sections/Header.tsx";
import * as $$$$$$$$11 from "./sections/ProductDetails.tsx";
import * as $$$$$$$$12 from "./sections/Highlights.tsx";
import * as $$$$$$$$13 from "./sections/WhatsApp.tsx";
import * as $$$$$$$$14 from "./sections/Carousel.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect/[...block].ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i2$$$$$$0 from "$live/handlers/devPage.ts";
import * as i2$$$$$$1 from "$live/handlers/fresh.ts";
import * as i1$2 from "$live/handlers/proxy.ts";
import * as i2$$$$$$2 from "$live/handlers/router.ts";
import * as i2$$$$$$3 from "$live/handlers/routesSelection.ts";
import * as i2$$$$$$$0 from "$live/pages/LivePage.tsx";
import * as i2$$$$0 from "$live/sections/PageInclude.tsx";
import * as i2$$$$1 from "$live/sections/Slot.tsx";
import * as i2$$$$2 from "$live/sections/UseSlot.tsx";
import * as i2$$$$$$$$0 from "$live/matchers/MatchAlways.ts";
import * as i2$$$$$$$$1 from "$live/matchers/MatchDate.ts";
import * as i2$$$$$$$$2 from "$live/matchers/MatchEnvironment.ts";
import * as i2$$$$$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$4 from "$live/matchers/MatchOrigin.ts";
import * as i2$$$$$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i2$$$$$$$$5 from "$live/matchers/MatchSite.ts";
import * as i2$$$$$$$$6 from "$live/matchers/MatchUserAgent.ts";
import * as i2$$$$$$$$$0 from "$live/flags/audience.ts";
import * as i2$$$$$$$$$1 from "$live/flags/everyone.ts";
import * as i2$0 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as i2$1 from "deco-sites/std/functions/requestToParam.ts";
import * as i2$2 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as i2$3 from "deco-sites/std/functions/shopifyProductList.ts";
import * as i2$4 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as i2$5 from "deco-sites/std/functions/vndaProductDetailsPage.ts";
import * as i2$6 from "deco-sites/std/functions/vndaProductList.ts";
import * as i2$7 from "deco-sites/std/functions/vndaProductListingPage.ts";
import * as i2$8 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as i2$9 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as i2$10 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as i2$11 from "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts";
import * as i2$12 from "deco-sites/std/functions/vtexNavbar.ts";
import * as i2$13 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as i2$14 from "deco-sites/std/functions/vtexProductList.ts";
import * as i2$15 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as i2$16 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as i2$17 from "deco-sites/std/functions/vtexWishlist.ts";
import * as i2$$0 from "deco-sites/std/accounts/occ.ts";
import * as i2$$1 from "deco-sites/std/accounts/shopify.ts";
import * as i2$$2 from "deco-sites/std/accounts/vnda.ts";
import * as i2$$3 from "deco-sites/std/accounts/vtex.ts";
import * as i2$$4 from "deco-sites/std/accounts/yourViews.ts";
import * as i2$$$0 from "deco-sites/std/loaders/vtex/cart.ts";
import * as i2$$$1 from "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts";
import * as i2$$$2 from "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts";
import * as i2$$$3 from "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts";
import * as i2$$$4 from "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts";
import * as i2$$$5 from "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts";
import * as i2$$$6 from "deco-sites/std/loaders/vtex/legacy/productList.ts";
import * as i2$$$7 from "deco-sites/std/loaders/vtex/legacy/productListingPage.ts";
import * as i2$$$8 from "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts";
import * as i2$$$9 from "deco-sites/std/loaders/vtex/navbar.ts";
import * as i2$$$10 from "deco-sites/std/loaders/vtex/user.ts";
import * as i2$$$11 from "deco-sites/std/loaders/vtex/wishlist.ts";
import * as i2$$$$3 from "deco-sites/std/sections/Analytics.tsx";
import * as i2$$$$4 from "deco-sites/std/sections/configOCC.global.tsx";
import * as i2$$$$5 from "deco-sites/std/sections/configShopify.global.tsx";
import * as i2$$$$6 from "deco-sites/std/sections/configVNDA.global.tsx";
import * as i2$$$$7 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as i2$$$$8 from "deco-sites/std/sections/configYourViews.global.tsx";
import * as i2$$$$9 from "deco-sites/std/sections/SEO.tsx";
import * as i2$$$$10 from "deco-sites/std/sections/SEOPDP.tsx";
import * as i2$$$$11 from "deco-sites/std/sections/SEOPLP.tsx";
import * as i2$$$$$0 from "deco-sites/std/actions/vtex/cart/addItems.ts";
import * as i2$$$$$1 from "deco-sites/std/actions/vtex/cart/getInstallment.ts";
import * as i2$$$$$2 from "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts";
import * as i2$$$$$3 from "deco-sites/std/actions/vtex/cart/removeItems.ts";
import * as i2$$$$$4 from "deco-sites/std/actions/vtex/cart/simulation.ts";
import * as i2$$$$$5 from "deco-sites/std/actions/vtex/cart/updateAttachment.ts";
import * as i2$$$$$6 from "deco-sites/std/actions/vtex/cart/updateCoupons.ts";
import * as i2$$$$$7 from "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts";
import * as i2$$$$$8 from "deco-sites/std/actions/vtex/cart/updateItemPrice.ts";
import * as i2$$$$$9 from "deco-sites/std/actions/vtex/cart/updateItems.ts";
import * as i2$$$$$10 from "deco-sites/std/actions/vtex/cart/updateProfile.ts";
import * as i2$$$$$11 from "deco-sites/std/actions/vtex/cart/updateUser.ts";
import * as i2$$$$$12 from "deco-sites/std/actions/vtex/wishlist/addItem.ts";
import * as i2$$$$$13 from "deco-sites/std/actions/vtex/wishlist/removeItem.ts";

const manifest = {
  "routes": {
    "./routes/_app.tsx": $$$$1,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/api/[...catchall].tsx": $$$$0,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect/[...block].ts": $live_inspect,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/live/workbench.ts": $live_workbench,
  },
  "islands": {
    "./islands/AddToCartButton.tsx": $$$$$4,
    "./islands/HeaderButton.tsx": $$$$$2,
    "./islands/HeaderModals.tsx": $$$$$5,
    "./islands/HeaderSearchMenu.tsx": $$$$$3,
    "./islands/ProductImageZoom.tsx": $$$$$7,
    "./islands/SearchControls.tsx": $$$$$8,
    "./islands/ShippingSimulation.tsx": $$$$$1,
    "./islands/SliderJS.tsx": $$$$$6,
    "./islands/WishlistButton.tsx": $$$$$0,
  },
  "sections": {
    "$live/sections/PageInclude.tsx": i2$$$$0,
    "$live/sections/Slot.tsx": i2$$$$1,
    "$live/sections/UseSlot.tsx": i2$$$$2,
    "deco-sites/miess/sections/BannerGrid.tsx": $$$$$$$$4,
    "deco-sites/miess/sections/BannerPLP.tsx": $$$$$$$$3,
    "deco-sites/miess/sections/Carousel.tsx": $$$$$$$$14,
    "deco-sites/miess/sections/CookieConsent.tsx": $$$$$$$$8,
    "deco-sites/miess/sections/DesignSystem.tsx": $$$$$$$$9,
    "deco-sites/miess/sections/Features.tsx": $$$$$$$$2,
    "deco-sites/miess/sections/Footer.tsx": $$$$$$$$7,
    "deco-sites/miess/sections/Header.tsx": $$$$$$$$10,
    "deco-sites/miess/sections/Highlights.tsx": $$$$$$$$12,
    "deco-sites/miess/sections/LinkTree.tsx": $$$$$$$$1,
    "deco-sites/miess/sections/ProductDetails.tsx": $$$$$$$$11,
    "deco-sites/miess/sections/ProductShelf.tsx": $$$$$$$$6,
    "deco-sites/miess/sections/SearchResult.tsx": $$$$$$$$5,
    "deco-sites/miess/sections/WhatsApp.tsx": $$$$$$$$13,
    "deco-sites/miess/sections/WishlistGallery.tsx": $$$$$$$$0,
    "deco-sites/std/sections/Analytics.tsx": i2$$$$3,
    "deco-sites/std/sections/configOCC.global.tsx": i2$$$$4,
    "deco-sites/std/sections/configShopify.global.tsx": i2$$$$5,
    "deco-sites/std/sections/configVNDA.global.tsx": i2$$$$6,
    "deco-sites/std/sections/configVTEX.global.tsx": i2$$$$7,
    "deco-sites/std/sections/configYourViews.global.tsx": i2$$$$8,
    "deco-sites/std/sections/SEO.tsx": i2$$$$9,
    "deco-sites/std/sections/SEOPDP.tsx": i2$$$$10,
    "deco-sites/std/sections/SEOPLP.tsx": i2$$$$11,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i2$$$$$$0,
    "$live/handlers/fresh.ts": i2$$$$$$1,
    "$live/handlers/proxy.ts": i1$2,
    "$live/handlers/router.ts": i2$$$$$$2,
    "$live/handlers/routesSelection.ts": i2$$$$$$3,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i2$$$$$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i2$$$$$$$$0,
    "$live/matchers/MatchDate.ts": i2$$$$$$$$1,
    "$live/matchers/MatchEnvironment.ts": i2$$$$$$$$2,
    "$live/matchers/MatchMulti.ts": i2$$$$$$$$3,
    "$live/matchers/MatchOrigin.ts": i1$$$$4,
    "$live/matchers/MatchRandom.ts": i2$$$$$$$$4,
    "$live/matchers/MatchSite.ts": i2$$$$$$$$5,
    "$live/matchers/MatchUserAgent.ts": i2$$$$$$$$6,
  },
  "flags": {
    "$live/flags/audience.ts": i2$$$$$$$$$0,
    "$live/flags/everyone.ts": i2$$$$$$$$$1,
  },
  "functions": {
    "deco-sites/std/functions/occProductDetailsPage.ts": i2$0,
    "deco-sites/std/functions/requestToParam.ts": i2$1,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": i2$2,
    "deco-sites/std/functions/shopifyProductList.ts": i2$3,
    "deco-sites/std/functions/shopifyProductListingPage.ts": i2$4,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": i2$5,
    "deco-sites/std/functions/vndaProductList.ts": i2$6,
    "deco-sites/std/functions/vndaProductListingPage.ts": i2$7,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": i2$8,
    "deco-sites/std/functions/vtexLegacyProductList.ts": i2$9,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": i2$10,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": i2$11,
    "deco-sites/std/functions/vtexNavbar.ts": i2$12,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": i2$13,
    "deco-sites/std/functions/vtexProductList.ts": i2$14,
    "deco-sites/std/functions/vtexProductListingPage.ts": i2$15,
    "deco-sites/std/functions/vtexSuggestions.ts": i2$16,
    "deco-sites/std/functions/vtexWishlist.ts": i2$17,
  },
  "accounts": {
    "deco-sites/std/accounts/occ.ts": i2$$0,
    "deco-sites/std/accounts/shopify.ts": i2$$1,
    "deco-sites/std/accounts/vnda.ts": i2$$2,
    "deco-sites/std/accounts/vtex.ts": i2$$3,
    "deco-sites/std/accounts/yourViews.ts": i2$$4,
  },
  "loaders": {
    "deco-sites/std/loaders/vtex/cart.ts": i2$$$0,
    "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts":
      i2$$$1,
    "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts": i2$$$2,
    "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts":
      i2$$$3,
    "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts": i2$$$4,
    "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts": i2$$$5,
    "deco-sites/std/loaders/vtex/legacy/productList.ts": i2$$$6,
    "deco-sites/std/loaders/vtex/legacy/productListingPage.ts": i2$$$7,
    "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts": i2$$$8,
    "deco-sites/std/loaders/vtex/navbar.ts": i2$$$9,
    "deco-sites/std/loaders/vtex/user.ts": i2$$$10,
    "deco-sites/std/loaders/vtex/wishlist.ts": i2$$$11,
  },
  "actions": {
    "deco-sites/std/actions/vtex/cart/addItems.ts": i2$$$$$0,
    "deco-sites/std/actions/vtex/cart/getInstallment.ts": i2$$$$$1,
    "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts": i2$$$$$2,
    "deco-sites/std/actions/vtex/cart/removeItems.ts": i2$$$$$3,
    "deco-sites/std/actions/vtex/cart/simulation.ts": i2$$$$$4,
    "deco-sites/std/actions/vtex/cart/updateAttachment.ts": i2$$$$$5,
    "deco-sites/std/actions/vtex/cart/updateCoupons.ts": i2$$$$$6,
    "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts": i2$$$$$7,
    "deco-sites/std/actions/vtex/cart/updateItemPrice.ts": i2$$$$$8,
    "deco-sites/std/actions/vtex/cart/updateItems.ts": i2$$$$$9,
    "deco-sites/std/actions/vtex/cart/updateProfile.ts": i2$$$$$10,
    "deco-sites/std/actions/vtex/cart/updateUser.ts": i2$$$$$11,
    "deco-sites/std/actions/vtex/wishlist/addItem.ts": i2$$$$$12,
    "deco-sites/std/actions/vtex/wishlist/removeItem.ts": i2$$$$$13,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
