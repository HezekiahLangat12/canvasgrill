import { _ as defineProdDiagnostics, a as useNuxtApp, b as __reExport, c as nuxtLinkDefaults, d as require_compiler_dom_cjs_prod, f as require_shared_cjs_prod, g as prodReporters, h as docsBase, i as defineNuxtPlugin, l as vue_exports, m as appDiagnostics, n as applyPlugins, o as useRuntimeConfig, r as createNuxtApp, s as asyncDataDefaults, t as useHead$1, u as require_runtime_dom_cjs_prod, v as __commonJSMin, x as __toESM, y as __exportAll } from "./_nuxt/head-adzeRItZ.js";
import { A as isArray$1, B as createError$1, C as stringifyQuery, D as assign, E as applyToParams, F as routeLocationKey, G as encodeRoutePath, H as showError, I as routerKey, J as useRoute, K as navigateTo, L as routerViewLocationKey, M as matchedRouteKey, N as mergeOptions, O as createRouterError, P as noop$1, Q as PageRouteSymbol, R as viewDepthKey, T as useCallbacks, U as useError, V as isNuxtError, W as defineNuxtRouteMiddleware, X as navigationDiagnostics, Y as useRouter, Z as LayoutMetaSymbol, _ as normalizeBase, a as decode, b as parseURL$1, c as extractChangingRecords, f as guardToPromiseFn, g as isSameRouteRecord, h as isSameRouteLocationParams, i as createHref, j as isNavigationFailure, k as isAbsolutePath, l as extractComponentsGuards, m as isSameRouteLocation, n as sanitizeTag, o as encodeHash, p as isRouteName, q as resolveRouteObject, r as START_LOCATION_NORMALIZED, s as encodeParam, t as isChangingPage, v as normalizeQuery, w as stringifyURL, y as parseQuery$1, z as _showErrorUnlessCrawler } from "./_nuxt/ready-GQIEIVkm.js";
import { executeAsync } from "/vercel/share/v0-project/node_modules/.pnpm/unctx@3.0.1_magic-string@1.4.3_rolldown@1.2.12_unplugin@3.4.0_esbuild@0.28.2_rolldown@1_d876a8487c51c33798f437f2b0d9f866/node_modules/unctx/dist/index.mjs";
import "/vercel/share/v0-project/node_modules/.pnpm/@nuxt+nitro-server@4.5.2_1e6bb6423bccac1f938f4a5f0dad6b2d/node_modules/@nuxt/nitro-server/dist/h3.mjs";
import { hasProtocol, isScriptProtocol, joinURL, parseQuery, withTrailingSlash, withoutTrailingSlash } from "/vercel/share/v0-project/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
import { $fetch } from "/vercel/share/v0-project/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import { baseURL } from "#internal/nuxt/paths";
import defu, { defu as defu$1, defuFn } from "/vercel/share/v0-project/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs";
import { klona } from "/vercel/share/v0-project/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/vercel/share/v0-project/node_modules/.pnpm/cookie-es@3.1.1/node_modules/cookie-es/dist/index.mjs";
import { hash } from "/vercel/share/v0-project/node_modules/.pnpm/ohash@2.0.12/node_modules/ohash/dist/index.mjs";
import colors from "tailwindcss/colors";
//#region virtual:nuxt:.nuxt%2Ffetch.mjs
if (!globalThis.$fetch) globalThis.$fetch = $fetch.create({ baseURL: baseURL() });
var $fetch$2 = globalThis.$fetch;
//#endregion
//#region virtual:nuxt:.nuxt%2Fglobal-polyfills.mjs
if (!("global" in globalThis)) globalThis.global = globalThis;
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/head/runtime/island-head.js
/**
* No-op `head.push` until the returned `unfreeze` runs. Plugin/transformer
* augmentations on the same head are unaffected.
*/
function freezeHead(head) {
	const realPush = head.push;
	head.push = () => ({
		dispose: () => {},
		patch: () => {},
		_i: 0
	});
	return () => {
		head.push = realPush;
	};
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/head/runtime/plugins/unhead.server.js
var plugin$2 = defineNuxtPlugin({
	name: "nuxt:head",
	enforce: "pre",
	setup(nuxtApp) {
		const head = nuxtApp.ssrContext.head;
		if (nuxtApp.ssrContext.islandContext) {
			const unfreeze = freezeHead(head);
			nuxtApp.hooks.hookOnce("app:created", unfreeze);
		}
		nuxtApp.vueApp.use(head);
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/pages/runtime/utils.js
var ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE = /:\w+/g;
var interpolatePath = (route, match) => {
	return match.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
};
var generateRouteKey = (routeProps, override) => {
	const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
	const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
	return typeof source === "function" ? source(routeProps.route) : source;
};
/** @since 3.9.0 */
function toArray$1(value) {
	return Array.isArray(value) ? value : [value];
}
//#endregion
//#region node_modules/.pnpm/vue-router@5.3.1_@vue+compiler-sfc@3.5.43_esbuild@0.28.2_rolldown@1.2.12_rollup@4.64.0__5505fef714296d308f10004d0c6d79e2/node_modules/vue-router/dist/vue-router.js
/*!
* vue-router v5.3.1
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
/**
* Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
* It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
*
* @param base - Base applied to all urls, defaults to '/'
* @returns a history object that can be passed to the router constructor
*/
function createMemoryHistory(base = "") {
	let listeners = [];
	let queue = [["", {}]];
	let position = 0;
	base = normalizeBase(base);
	function setLocation(location, state = {}) {
		position++;
		if (position !== queue.length) queue.splice(position);
		queue.push([location, state]);
	}
	function triggerListeners(to, from, { direction, delta }) {
		const info = {
			direction,
			delta,
			type: "pop"
		};
		for (const callback of listeners) callback(to, from, info);
	}
	const routerHistory = {
		location: "",
		state: {},
		base,
		createHref: createHref.bind(null, base),
		replace(to, state) {
			queue.splice(position--, 1);
			setLocation(to, state);
		},
		push(to, state) {
			setLocation(to, state);
		},
		listen(callback) {
			listeners.push(callback);
			return () => {
				const index = listeners.indexOf(callback);
				if (index > -1) listeners.splice(index, 1);
			};
		},
		destroy() {
			listeners = [];
			queue = [["", {}]];
			position = 0;
		},
		go(delta, shouldTrigger = true) {
			const from = this.location;
			const direction = delta < 0 ? "back" : "forward";
			position = Math.max(0, Math.min(position + delta, queue.length - 1));
			if (shouldTrigger) triggerListeners(this.location, from, {
				direction,
				delta
			});
		}
	};
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => queue[position][0]
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => queue[position][1]
	});
	return routerHistory;
}
var ROOT_TOKEN = {
	type: 0,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!isAbsolutePath(path)) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = 0;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === 0) segment.push({
			type: 0,
			value: buffer
		});
		else if (state === 1 || state === 2 || state === 3) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: 1,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		switch (state) {
			case 0:
				if (char === "\\") {
					previousState = state;
					state = 4;
				} else if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = 1;
				} else addCharToBuffer();
				break;
			case 4:
				addCharToBuffer();
				state = previousState;
				break;
			case 1:
				if (char === "(") state = 2;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = 0;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case 2:
				if (char === ")") {
					if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
					else state = 3;
				} else customRe += char;
				break;
			case 3:
				consumeBuffer();
				state = 0;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default: crash("Unknown state");
		}
	}
	if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [90];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = 40 + (options.sensitive ? .25 : 0);
			if (token.type === 0) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += 40;
			} else if (token.type === 1) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re !== BASE_PARAM_PATTERN) {
					subSegmentScore += 10;
					try {
						new RegExp(`(${re})`);
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += 20;
				if (optional) subSegmentScore += -8;
				if (repeatable) subSegmentScore += -20;
				if (re === ".*") subSegmentScore += -50;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += .7000000000000001;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === 0) path += token.value;
			else if (token.type === 1) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray$1(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray$1(param) ? param.join("/") : param;
				if (!text) {
					if (optional) {
						if (segment.length < 2) {
							if (path.endsWith("/")) path = path.slice(0, -1);
							else avoidDuplicatedSlash = true;
						}
					} else throw new Error(`Missing required param "${value}"`);
				}
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === 80 ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === 80 ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const parser = tokensToParser(tokenizePath(record.path), options);
	const matcher = assign(parser, {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && !isAbsolutePath(path)) {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop$1;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location && location.name) {
			matcher = matcherMap.get(location.name);
			if (!matcher) throw createRouterError(1, { location });
			name = matcher.record.name;
			params = assign(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location.params && pickParams(location.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location.path != null) {
			path = location.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
				matcher.keys.forEach((key) => {
					if (key.optional && !params[key.name]) delete params[key.name];
				});
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(1, {
				location,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = (0, vue_exports.inject)(routerKey);
	const currentRoute = (0, vue_exports.inject)(routeLocationKey);
	const route = (0, vue_exports.computed)(() => {
		const to = (0, vue_exports.unref)(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = (0, vue_exports.computed)(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = (0, vue_exports.computed)(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = (0, vue_exports.computed)(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[(0, vue_exports.unref)(props.replace) ? "replace" : "push"]((0, vue_exports.unref)(props.to)).catch(noop$1);
			if (props.viewTransition && false);
			return p;
		}
		return Promise.resolve();
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: (0, vue_exports.computed)(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = (0, vue_exports.reactive)(useLink(props));
		const { options } = (0, vue_exports.inject)(routerKey);
		const elClass = (0, vue_exports.computed)(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : (0, vue_exports.h)("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (isArray$1(innerValue)) {
			if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
		} else if (innerValue !== outerValue) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /*#__PURE__*/ (0, vue_exports.defineComponent)({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = (0, vue_exports.inject)(routerViewLocationKey);
		const routeToDisplay = (0, vue_exports.computed)(() => props.route || injectedRoute.value);
		const injectedDepth = (0, vue_exports.inject)(viewDepthKey, 0);
		const depth = (0, vue_exports.computed)(() => {
			let initialDepth = (0, vue_exports.unref)(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = (0, vue_exports.computed)(() => routeToDisplay.value.matched[depth.value]);
		(0, vue_exports.provide)(viewDepthKey, (0, vue_exports.computed)(() => depth.value + 1));
		(0, vue_exports.provide)(matchedRouteKey, matchedRouteRef);
		(0, vue_exports.provide)(routerViewLocationKey, routeToDisplay);
		const viewRef = (0, vue_exports.ref)();
		(0, vue_exports.watch)(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, _oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot$1(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = (0, vue_exports.h)(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot$1(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot$1(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1$1 = options.parseQuery || parseQuery$1;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = (0, vue_exports.shallowRef)(START_LOCATION_NORMALIZED);
	const routesVersion = (0, vue_exports.shallowRef)(0);
	let pendingLocation = START_LOCATION_NORMALIZED;
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		const removeRoute = matcher.addRoute(record, parent);
		routesVersion.value++;
		return () => {
			removeRoute();
			routesVersion.value++;
		};
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) {
			matcher.removeRoute(recordMatcher);
			routesVersion.value++;
		}
	}
	function clearRoutes() {
		matcher.clearRoutes();
		routesVersion.value++;
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		routesVersion.value;
		if (typeof rawLocation === "string") {
			currentLocation = currentLocation || (rawLocation.startsWith("/") ? START_LOCATION_NORMALIZED : currentRoute.value);
			const locationNormalized = parseURL$1(parseQuery$1$1, rawLocation, currentLocation.path);
			const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href = routerHistory.createHref(locationNormalized.fullPath);
			return assign(locationNormalized, matchedRoute, {
				params: decodeParams(matchedRoute.params),
				redirectedFrom: void 0,
				href
			});
		}
		currentLocation = assign({}, currentLocation || (rawLocation.path != null && rawLocation.path.startsWith("/") && !("name" in rawLocation && rawLocation.name) ? START_LOCATION_NORMALIZED : currentRoute.value));
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = assign({}, rawLocation, { path: parseURL$1(parseQuery$1$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL$1(parseQuery$1$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(8, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(16, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure) => {
			if (failure) {
				if (isNavigationFailure(failure, 2)) return pushWithRedirect(assign({ replace }, locationAsObject(failure.to), {
					state: typeof failure.to === "object" ? assign({}, data, failure.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure = finalizeNavigation(toLocation, from, true, replace, data);
			triggerAfterEach(toLocation, from, failure);
			return failure;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) {
				if (isArray$1(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
				else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			}
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = {};
		if (isPush) {
			if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
			else routerHistory.push(toLocation.fullPath, data);
		}
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop$1);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, 12)) return error;
				if (isNavigationFailure(error, 2)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, 20) && !info.delta && info.type === "pop") routerHistory.go(-1, false);
					}).catch(noop$1);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, 8)) routerHistory.go(-info.delta, false);
					else if (info.type === "pop" && isNavigationFailure(failure, 20)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop$1);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve, reject) => {
			readyHandlers.add([resolve, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		return Promise.resolve();
	}
	const go = (delta) => routerHistory.go(delta);
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => (0, vue_exports.unref)(currentRoute)
			});
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, (0, vue_exports.shallowReactive)(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/pages/runtime/router.options.js
var router_options_default = { scrollBehavior(to, from, savedPosition) {
	const nuxtApp = useNuxtApp();
	const router = useRouter();
	const hashScrollBehaviour = router.options?.scrollBehaviorType ?? "auto";
	if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
		if (from.hash && !to.hash) return savedPosition ?? {
			left: 0,
			top: 0
		};
		if (to.hash) return {
			el: to.hash,
			top: _getHashElementScrollMarginTop(to.hash),
			behavior: hashScrollBehaviour
		};
		return false;
	}
	if ((typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop) === false) return false;
	if (from === START_LOCATION_NORMALIZED) return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
	return new Promise((resolve) => {
		const doScroll = () => {
			requestAnimationFrame(() => {
				if (router.currentRoute.value.fullPath !== to.fullPath) {
					resolve(false);
					return;
				}
				resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
			});
		};
		nuxtApp.hooks.hookOnce("page:loading:end", () => {
			const transitionPromise = nuxtApp["~transitionPromise"];
			if (transitionPromise) transitionPromise.then(doScroll);
			else doScroll();
		});
	});
} };
function _getHashElementScrollMarginTop(selector) {
	try {
		const elem = (void 0).querySelector(selector);
		if (elem) return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
	} catch {}
	return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
	if (savedPosition) return savedPosition;
	if (to.hash) return {
		el: to.hash,
		top: _getHashElementScrollMarginTop(to.hash),
		behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
	};
	return {
		left: 0,
		top: 0
	};
}
var virtual_nuxt__nuxt_2Frouter_options_default = {
	hashMode: false,
	scrollBehaviorType: "auto",
	...router_options_default
};
Object.assign(Object.create(null), {});
var pageIslandRoutes = Object.assign(Object.create(null), {});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/pages/runtime/validate.js
var middleware$1 = defineNuxtRouteMiddleware(async (to) => {
	let __temp, __restore;
	if (!to.meta?.validate) return;
	const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
	if (result === true) return;
	return createError$1({
		fatal: false,
		status: result && (result.status || result.statusCode) || 404,
		statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
		data: { path: to.fullPath }
	});
}, 1);
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/diagnostics/manifest.js
/**
* E5xxx
* App manifest / route-rules runtime diagnostics.
*/
var manifestDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region virtual:nuxt:.nuxt%2Froute-rules.mjs
var sensitiveMatcher = (m, p) => {
	return [];
};
var foldedMatcher = sensitiveMatcher;
var decodeRoutePath = function decodeRoutePath(path) {
	if (!path.includes("%")) return path;
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	try {
		return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
	} catch {
		return path;
	}
};
var normalizePath = (path, fold) => {
	if (typeof path !== "string") return path;
	const decoded = decodeRoutePath(path);
	return fold ? decoded.toLowerCase() : decoded;
};
var virtual_nuxt__nuxt_2Froute_rules_default = (path) => virtual_nuxt__nuxt_2Frouter_options_default.sensitive ? defu$1({}, ...sensitiveMatcher("", normalizePath(path, false)).map((r) => r.data).reverse()) : defu$1({}, ...foldedMatcher("", normalizePath(path, true)).map((r) => r.data).reverse());
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/composables/manifest.js
var routeRulesMatcher = virtual_nuxt__nuxt_2Froute_rules_default;
function getRouteRules(arg) {
	const path = typeof arg === "string" ? arg : arg.path;
	try {
		return routeRulesMatcher(path);
	} catch (e) {
		manifestDiagnostics.NUXT_E5003({
			path,
			cause: e
		});
		return {};
	}
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fmiddleware.mjs
var globalMiddleware = [middleware$1, /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {})];
var namedMiddleware = {};
//#endregion
//#region virtual:nuxt:.nuxt%2Froutes.mjs
var virtual_nuxt__nuxt_2Froutes_default = [{
	name: "index",
	path: "/",
	component: () => import("./_nuxt/pages-ehHSsLfM.js")
}];
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/pages/runtime/plugins/router.js
var plugin$1 = defineNuxtPlugin({
	name: "nuxt:router",
	enforce: "pre",
	async setup(nuxtApp) {
		let __temp, __restore;
		let routerBase = useRuntimeConfig().app.baseURL;
		const history = virtual_nuxt__nuxt_2Frouter_options_default.history?.(routerBase) ?? createMemoryHistory(routerBase);
		const routes = virtual_nuxt__nuxt_2Frouter_options_default.routes ? ([__temp, __restore] = executeAsync(() => virtual_nuxt__nuxt_2Frouter_options_default.routes(virtual_nuxt__nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__nuxt_2Froutes_default : virtual_nuxt__nuxt_2Froutes_default;
		let startPosition;
		const router = createRouter({
			...virtual_nuxt__nuxt_2Frouter_options_default,
			scrollBehavior: (to, from, savedPosition) => {
				if (from === START_LOCATION_NORMALIZED) {
					startPosition = savedPosition;
					return;
				}
				if (virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior) {
					router.options.scrollBehavior = virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior;
					if ("scrollRestoration" in (void 0).history) {
						const unsub = router.beforeEach(() => {
							unsub();
							(void 0).history.scrollRestoration = "manual";
						});
					}
					return virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior(to, START_LOCATION_NORMALIZED, startPosition || savedPosition);
				}
			},
			history,
			routes
		});
		nuxtApp.vueApp.use(router);
		const previousRoute = (0, vue_exports.shallowRef)(router.currentRoute.value);
		router.afterEach((_to, from) => {
			previousRoute.value = from;
		});
		Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", { get: () => previousRoute.value });
		const initialURL = nuxtApp.ssrContext.url;
		const _route = (0, vue_exports.shallowRef)(router.currentRoute.value);
		const syncCurrentRoute = () => {
			_route.value = router.currentRoute.value;
		};
		router.afterEach((to, from) => {
			const lastTo = to.matched.at(-1)?.components?.default;
			const lastFrom = from.matched.at(-1)?.components?.default;
			if (lastTo === lastFrom) {
				if (generateRouteKey({
					route: to,
					Component: { type: lastTo }
				}) === generateRouteKey({
					route: from,
					Component: { type: lastFrom }
				})) syncCurrentRoute();
				return;
			}
			if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) syncCurrentRoute();
		});
		const route = { sync: syncCurrentRoute };
		for (const key in _route.value) Object.defineProperty(route, key, {
			get: () => _route.value[key],
			enumerable: true
		});
		nuxtApp._route = (0, vue_exports.shallowReactive)(route);
		nuxtApp._middleware ||= {
			global: [],
			named: {}
		};
		const error = useError();
		const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
		if (!nuxtApp.ssrContext?.islandContext || isServerPage) router.afterEach(async (to, _from, failure) => {
			delete nuxtApp._processingMiddleware;
			delete nuxtApp._middlewareTo;
			if (failure) await nuxtApp.callHook("page:loading:end");
			if (failure?.type === 4) return;
			if (to.redirectedFrom && to.fullPath !== initialURL) await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
		});
		try {
			[__temp, __restore] = executeAsync(() => router.push(initialURL)), __temp = await __temp, __restore();
			[__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
		} catch (error) {
			[__temp, __restore] = executeAsync(() => _showErrorUnlessCrawler(nuxtApp, error)), await __temp, __restore();
		}
		const resolvedInitialRoute = router.currentRoute.value;
		syncCurrentRoute();
		if (nuxtApp.ssrContext?.islandContext && !isServerPage) return { provide: { router } };
		const initialLayout = nuxtApp.payload.state._layout;
		router.beforeEach(async (to, from) => {
			await nuxtApp.callHook("page:loading:start");
			to.meta = (0, vue_exports.reactive)(to.meta);
			if (nuxtApp.isHydrating && initialLayout && !(0, vue_exports.isReadonly)(to.meta.layout)) to.meta.layout = initialLayout;
			nuxtApp._processingMiddleware = true;
			nuxtApp._middlewareTo = to;
			if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
				const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
				for (const component of to.matched) {
					const componentMiddleware = component.meta.middleware;
					if (!componentMiddleware) continue;
					for (const entry of toArray$1(componentMiddleware)) middlewareEntries.add(entry);
				}
				const routeRules = getRouteRules({ path: to.path });
				if (routeRules.appMiddleware) for (const key in routeRules.appMiddleware) if (routeRules.appMiddleware[key]) middlewareEntries.add(key);
				else middlewareEntries.delete(key);
				for (const entry of middlewareEntries) {
					const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
					if (!middleware) throw navigationDiagnostics.NUXT_E2004({
						entry: String(entry),
						validMiddleware: void 0
					});
					try {
						const result = await nuxtApp.runWithContext(() => middleware(to, from));
						if (result === false || result instanceof Error) {
							const error = result || createError$1({
								status: 404,
								statusText: `Page Not Found: ${initialURL}`
							});
							await nuxtApp.runWithContext(() => showError(error));
							return false;
						}
						if (result === true) continue;
						if (result === false) return result;
						if (result) {
							if (isNuxtError(result) && result.fatal) await nuxtApp.runWithContext(() => showError(result));
							return result;
						}
					} catch (err) {
						const error = createError$1(err);
						if (error.fatal) await nuxtApp.runWithContext(() => showError(error));
						return error;
					}
				}
			}
		});
		if (isServerPage) router.beforeResolve((to) => {
			const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
			const actual = to.matched.find((m) => (m.components?.default)?.__nuxt_island)?.components?.default;
			if (!expected || expected !== actual?.__nuxt_island) {
				nuxtApp.ssrContext["~renderResponse"] = {
					statusCode: 400,
					statusMessage: "Invalid island request path"
				};
				return false;
			}
		});
		router.onError(async () => {
			delete nuxtApp._processingMiddleware;
			delete nuxtApp._middlewareTo;
			await nuxtApp.callHook("page:loading:end");
		});
		router.afterEach((to) => {
			if (to.matched.length === 0 && !error.value) return nuxtApp.runWithContext(() => showError(createError$1({
				status: 404,
				fatal: false,
				statusText: `Page not found: ${to.fullPath}`,
				data: { path: to.fullPath }
			})));
		});
		nuxtApp.hooks.hookOnce("app:created", async () => {
			try {
				if ("name" in resolvedInitialRoute) resolvedInitialRoute.name = void 0;
				await router.replace({
					...resolvedInitialRoute,
					force: true
				});
				router.options.scrollBehavior = virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior;
			} catch (error) {
				await _showErrorUnlessCrawler(nuxtApp, error);
			}
		});
		return { provide: { router } };
	}
}, 1);
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/diagnostics/state.js
/**
* E7xxx
* Payload / state / cookie runtime diagnostics.
*/
var stateDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/composables/payload.js
/**
* This is an experimental function for configuring passing rich data from server -> client.
* @since 3.4.0
*/
function definePayloadReducer(name, reduce) {
	useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/plugins/revive-payload.server.js
var reducers = [
	["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
	["EmptyShallowRef", (data) => (0, vue_exports.isRef)(data) && (0, vue_exports.isShallow)(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["EmptyRef", (data) => (0, vue_exports.isRef)(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["ShallowRef", (data) => (0, vue_exports.isRef)(data) && (0, vue_exports.isShallow)(data) && data.value],
	["ShallowReactive", (data) => (0, vue_exports.isReactive)(data) && (0, vue_exports.isShallow)(data) && (0, vue_exports.toRaw)(data)],
	["Ref", (data) => (0, vue_exports.isRef)(data) && data.value],
	["Reactive", (data) => (0, vue_exports.isReactive)(data) && (0, vue_exports.toRaw)(data)]
];
var plugin = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:revive-payload:server",
	setup() {
		for (const [reducer, fn] of reducers) definePayloadReducer(reducer, fn);
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/composables/state.js
var useStateKeyPrefix = "$s";
function useState(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (typeof args[0] !== "string") args.unshift(autoKey);
	const [_key, init] = args;
	if (!_key || typeof _key !== "string") throw stateDiagnostics.NUXT_E7009({ key: _key });
	if (init !== void 0 && typeof init !== "function") throw stateDiagnostics.NUXT_E7007({ type: typeof init });
	const key = useStateKeyPrefix + _key;
	const nuxtApp = useNuxtApp();
	const state = (0, vue_exports.toRef)(nuxtApp.payload.state, key);
	if (init) nuxtApp._state[key] ??= { _default: init };
	if (state.value === void 0 && init) {
		const initialValue = init();
		if ((0, vue_exports.isRef)(initialValue)) {
			nuxtApp.payload.state[key] = initialValue;
			return initialValue;
		}
		state.value = initialValue;
	}
	return state;
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/composables/ssr.js
var $fetch$1 = $fetch$2;
/** @since 3.0.0 */
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
/** @since 3.2.0 */
function useRequestFetch() {
	return useRequestEvent()?.$fetch || $fetch$1;
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fcolor-mode-options.mjs
var preference = "system";
//#endregion
//#region node_modules/.pnpm/@nuxtjs+color-mode@4.0.1_magic-string@1.4.3_magicast@0.5.5_rolldown@1.2.12_unplugin@3.4_702f2cf62d5a2635a846b4ca0d699d2e/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js
var plugin_server_default = defineNuxtPlugin((nuxtApp) => {
	const colorMode = nuxtApp.ssrContext?.islandContext ? (0, vue_exports.ref)({}).value : useState("color-mode", () => (0, vue_exports.reactive)({
		preference,
		value: preference,
		unknown: true,
		forced: false
	})).value;
	const htmlAttrs = {};
	useHead$1({ htmlAttrs });
	useRouter().afterEach((to) => {
		const forcedColorMode = to.meta.colorMode;
		if (forcedColorMode && forcedColorMode !== "system") {
			htmlAttrs["data-color-mode-forced"] = forcedColorMode;
			colorMode.value = forcedColorMode;
			colorMode.forced = true;
		} else if (forcedColorMode === "system") console.warn("You cannot force the colorMode to system at the page level.");
	});
	nuxtApp.provide("colorMode", colorMode);
});
/** client-end **/
var virtual_nuxt__nuxt_2Fapp_config_default = /*@__PURE__*/ defuFn({
	"nuxt": {},
	"ui": {
		"colors": {
			"primary": "green",
			"secondary": "blue",
			"success": "green",
			"info": "blue",
			"warning": "yellow",
			"error": "red",
			"neutral": "slate"
		},
		"icons": {
			"arrowDown": "i-lucide-arrow-down",
			"arrowLeft": "i-lucide-arrow-left",
			"arrowRight": "i-lucide-arrow-right",
			"arrowUp": "i-lucide-arrow-up",
			"caution": "i-lucide-circle-alert",
			"check": "i-lucide-check",
			"chevronDoubleLeft": "i-lucide-chevrons-left",
			"chevronDoubleRight": "i-lucide-chevrons-right",
			"chevronDown": "i-lucide-chevron-down",
			"chevronLeft": "i-lucide-chevron-left",
			"chevronRight": "i-lucide-chevron-right",
			"chevronUp": "i-lucide-chevron-up",
			"close": "i-lucide-x",
			"copy": "i-lucide-copy",
			"copyCheck": "i-lucide-copy-check",
			"dark": "i-lucide-moon",
			"drag": "i-lucide-grip-vertical",
			"ellipsis": "i-lucide-ellipsis",
			"error": "i-lucide-circle-x",
			"external": "i-lucide-arrow-up-right",
			"eye": "i-lucide-eye",
			"eyeOff": "i-lucide-eye-off",
			"file": "i-lucide-file",
			"folder": "i-lucide-folder",
			"folderOpen": "i-lucide-folder-open",
			"hash": "i-lucide-hash",
			"info": "i-lucide-info",
			"light": "i-lucide-sun",
			"loading": "i-lucide-loader-circle",
			"menu": "i-lucide-menu",
			"minus": "i-lucide-minus",
			"panelClose": "i-lucide-panel-left-close",
			"panelOpen": "i-lucide-panel-left-open",
			"plus": "i-lucide-plus",
			"reload": "i-lucide-rotate-ccw",
			"search": "i-lucide-search",
			"stop": "i-lucide-square",
			"star": "i-lucide-star",
			"success": "i-lucide-circle-check",
			"system": "i-lucide-monitor",
			"tip": "i-lucide-lightbulb",
			"upload": "i-lucide-upload",
			"warning": "i-lucide-triangle-alert"
		},
		"tv": { "twMergeConfig": {} }
	},
	"icon": {
		"provider": "server",
		"class": "",
		"aliases": {},
		"iconifyApiEndpoint": "https://api.iconify.design",
		"localApiEndpoint": "/api/_nuxt_icon",
		"fallbackToApi": true,
		"cssSelectorPrefix": "i-",
		"cssWherePseudo": true,
		"cssLayer": "base",
		"mode": "css",
		"attrs": { "aria-hidden": true },
		"collections": [
			"academicons",
			"akar-icons",
			"ant-design",
			"arcticons",
			"basil",
			"bi",
			"bitcoin-icons",
			"bpmn",
			"brandico",
			"bx",
			"bxl",
			"bxs",
			"bytesize",
			"carbon",
			"catppuccin",
			"cbi",
			"charm",
			"ci",
			"cib",
			"cif",
			"cil",
			"circle-flags",
			"circum",
			"clarity",
			"codex",
			"codicon",
			"covid",
			"cryptocurrency",
			"cryptocurrency-color",
			"cuida",
			"dashicons",
			"devicon",
			"devicon-plain",
			"dinkie-icons",
			"duo-icons",
			"ei",
			"el",
			"emojione",
			"emojione-monotone",
			"emojione-v1",
			"entypo",
			"entypo-social",
			"eos-icons",
			"ep",
			"et",
			"eva",
			"f7",
			"fa",
			"fa-brands",
			"fa-regular",
			"fa-solid",
			"fa6-brands",
			"fa6-regular",
			"fa6-solid",
			"fa7-brands",
			"fa7-regular",
			"fa7-solid",
			"fad",
			"famicons",
			"fe",
			"feather",
			"file-icons",
			"flag",
			"flagpack",
			"flat-color-icons",
			"flat-ui",
			"flowbite",
			"fluent",
			"fluent-color",
			"fluent-emoji",
			"fluent-emoji-flat",
			"fluent-emoji-high-contrast",
			"fluent-mdl2",
			"fontelico",
			"fontisto",
			"formkit",
			"foundation",
			"fxemoji",
			"gala",
			"game-icons",
			"garden",
			"geo",
			"gg",
			"gis",
			"gravity-ui",
			"gridicons",
			"grommet-icons",
			"guidance",
			"healthicons",
			"heroicons",
			"heroicons-outline",
			"heroicons-solid",
			"hugeicons",
			"humbleicons",
			"ic",
			"icomoon-free",
			"icon-park",
			"icon-park-outline",
			"icon-park-solid",
			"icon-park-twotone",
			"iconamoon",
			"iconoir",
			"icons8",
			"il",
			"ion",
			"iwwa",
			"ix",
			"jam",
			"la",
			"lets-icons",
			"line-md",
			"lineicons",
			"logos",
			"ls",
			"lsicon",
			"lucide",
			"lucide-lab",
			"mage",
			"majesticons",
			"maki",
			"map",
			"marketeq",
			"material-icon-theme",
			"material-symbols",
			"material-symbols-light",
			"mdi",
			"mdi-light",
			"medical-icon",
			"memory",
			"meteocons",
			"meteor-icons",
			"mi",
			"mingcute",
			"mono-icons",
			"mynaui",
			"nimbus",
			"nonicons",
			"noto",
			"noto-v1",
			"nrk",
			"octicon",
			"oi",
			"ooui",
			"openmoji",
			"oui",
			"pajamas",
			"pepicons",
			"pepicons-pencil",
			"pepicons-pop",
			"pepicons-print",
			"ph",
			"picon",
			"pixel",
			"pixelarticons",
			"prime",
			"proicons",
			"ps",
			"qlementine-icons",
			"quill",
			"radix-icons",
			"raphael",
			"ri",
			"rivet-icons",
			"roentgen",
			"si",
			"si-glyph",
			"sidekickicons",
			"simple-icons",
			"simple-line-icons",
			"skill-icons",
			"solar",
			"stash",
			"streamline",
			"streamline-block",
			"streamline-color",
			"streamline-cyber",
			"streamline-cyber-color",
			"streamline-emojis",
			"streamline-flex",
			"streamline-flex-color",
			"streamline-freehand",
			"streamline-freehand-color",
			"streamline-kameleon-color",
			"streamline-logos",
			"streamline-pixel",
			"streamline-plump",
			"streamline-plump-color",
			"streamline-sharp",
			"streamline-sharp-color",
			"streamline-stickies-color",
			"streamline-ultimate",
			"streamline-ultimate-color",
			"subway",
			"svg-spinners",
			"system-uicons",
			"tabler",
			"tdesign",
			"teenyicons",
			"temaki",
			"token",
			"token-branded",
			"topcoat",
			"twemoji",
			"typcn",
			"uil",
			"uim",
			"uis",
			"uit",
			"uiw",
			"unjs",
			"vaadin",
			"vs",
			"vscode-icons",
			"websymbol",
			"weui",
			"whh",
			"wi",
			"wpf",
			"zmdi",
			"zondicons"
		],
		"fetchTimeout": 1500
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/config.js
function useAppConfig() {
	const nuxtApp = useNuxtApp();
	nuxtApp._appConfig ||= klona(virtual_nuxt__nuxt_2Fapp_config_default);
	return nuxtApp._appConfig;
}
//#endregion
//#region node_modules/.pnpm/@iconify+vue@5.0.3_vue@3.5.43_typescript@5.7.3_/node_modules/@iconify/vue/dist/iconify.mjs
/**
* Expression to test part of icon name.
*
* Used when loading icons from Iconify API due to project naming convension.
* Ignored when using custom icon sets - convension does not apply.
*/
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
/**
* Convert string icon name to IconifyIconName object.
*/
var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
	const colonSeparated = value.split(":");
	if (value.slice(0, 1) === "@") {
		if (colonSeparated.length < 2 || colonSeparated.length > 3) return null;
		provider = colonSeparated.shift().slice(1);
	}
	if (colonSeparated.length > 3 || !colonSeparated.length) return null;
	if (colonSeparated.length > 1) {
		const name = colonSeparated.pop();
		const prefix = colonSeparated.pop();
		const result = {
			provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
			prefix,
			name
		};
		return validate && !validateIconName(result) ? null : result;
	}
	const name = colonSeparated[0];
	const dashSeparated = name.split("-");
	if (dashSeparated.length > 1) {
		const result = {
			provider,
			prefix: dashSeparated.shift(),
			name: dashSeparated.join("-")
		};
		return validate && !validateIconName(result) ? null : result;
	}
	if (allowSimpleName && provider === "") {
		const result = {
			provider,
			prefix: "",
			name
		};
		return validate && !validateIconName(result, allowSimpleName) ? null : result;
	}
	return null;
};
/**
* Check if icon is valid.
*
* This function is not part of stringToIcon because validation is not needed for most code.
*/
var validateIconName = (icon, allowSimpleName) => {
	if (!icon) return false;
	return !!((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
/**
* Resolve icon set icons
*
* Returns parent icon for each icon
*/
function getIconsTree(data, names) {
	const icons = data.icons;
	const aliases = data.aliases || Object.create(null);
	const resolved = Object.create(null);
	function resolve(name) {
		if (icons[name]) return resolved[name] = [];
		if (!(name in resolved)) {
			resolved[name] = null;
			const parent = aliases[name] && aliases[name].parent;
			const value = parent && resolve(parent);
			if (value) resolved[name] = [parent].concat(value);
		}
		return resolved[name];
	}
	Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
	return resolved;
}
/** Default values for dimensions */
var defaultIconDimensions$1 = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
});
/** Default values for transformations */
var defaultIconTransformations$1 = Object.freeze({
	rotate: 0,
	vFlip: false,
	hFlip: false
});
/** Default values for all optional IconifyIcon properties */
var defaultIconProps$1 = Object.freeze({
	...defaultIconDimensions$1,
	...defaultIconTransformations$1
});
/** Default values for all properties used in ExtendedIconifyIcon */
var defaultExtendedIconProps$1 = Object.freeze({
	...defaultIconProps$1,
	body: "",
	hidden: false
});
/**
* Merge transformations
*/
function mergeIconTransformations(obj1, obj2) {
	const result = {};
	if (!obj1.hFlip !== !obj2.hFlip) result.hFlip = true;
	if (!obj1.vFlip !== !obj2.vFlip) result.vFlip = true;
	const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
	if (rotate) result.rotate = rotate;
	return result;
}
/**
* Merge icon and alias
*
* Can also be used to merge default values and icon
*/
function mergeIconData(parent, child) {
	const result = mergeIconTransformations(parent, child);
	for (const key in defaultExtendedIconProps$1) if (key in defaultIconTransformations$1) {
		if (key in parent && !(key in result)) result[key] = defaultIconTransformations$1[key];
	} else if (key in child) result[key] = child[key];
	else if (key in parent) result[key] = parent[key];
	return result;
}
/**
* Get icon data, using prepared aliases tree
*/
function internalGetIconData(data, name, tree) {
	const icons = data.icons;
	const aliases = data.aliases || Object.create(null);
	let currentProps = {};
	function parse(name) {
		currentProps = mergeIconData(icons[name] || aliases[name], currentProps);
	}
	parse(name);
	tree.forEach(parse);
	return mergeIconData(data, currentProps);
}
/**
* Extract icons from an icon set
*
* Returns list of icons that were found in icon set
*/
function parseIconSet(data, callback) {
	const names = [];
	if (typeof data !== "object" || typeof data.icons !== "object") return names;
	if (data.not_found instanceof Array) data.not_found.forEach((name) => {
		callback(name, null);
		names.push(name);
	});
	const tree = getIconsTree(data);
	for (const name in tree) {
		const item = tree[name];
		if (item) {
			callback(name, internalGetIconData(data, name, item));
			names.push(name);
		}
	}
	return names;
}
/**
* Optional properties
*/
var optionalPropertyDefaults = {
	provider: "",
	aliases: {},
	not_found: {},
	...defaultIconDimensions$1
};
/**
* Check props
*/
function checkOptionalProps(item, defaults) {
	for (const prop in defaults) if (prop in item && typeof item[prop] !== typeof defaults[prop]) return false;
	return true;
}
/**
* Validate icon set, return it as IconifyJSON on success, null on failure
*
* Unlike validateIconSet(), this function is very basic.
* It does not throw exceptions, it does not check metadata, it does not fix stuff.
*/
function quicklyValidateIconSet(obj) {
	if (typeof obj !== "object" || obj === null) return null;
	const data = obj;
	if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") return null;
	if (!checkOptionalProps(obj, optionalPropertyDefaults)) return null;
	const icons = data.icons;
	for (const name in icons) {
		const icon = icons[name];
		if (!name || typeof icon.body !== "string" || !checkOptionalProps(icon, defaultExtendedIconProps$1)) return null;
	}
	const aliases = data.aliases || Object.create(null);
	for (const name in aliases) {
		const icon = aliases[name];
		const parent = icon.parent;
		if (!name || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(icon, defaultExtendedIconProps$1)) return null;
	}
	return data;
}
/**
* Storage by provider and prefix
*/
var dataStorage = Object.create(null);
/**
* Create new storage
*/
function newStorage(provider, prefix) {
	return {
		provider,
		prefix,
		icons: Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
/**
* Get storage for provider and prefix
*/
function getStorage(provider, prefix) {
	const providerStorage = dataStorage[provider] || (dataStorage[provider] = Object.create(null));
	return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
/**
* Add icon set to storage
*
* Returns array of added icons
*/
function addIconSet(storage, data) {
	if (!quicklyValidateIconSet(data)) return [];
	return parseIconSet(data, (name, icon) => {
		if (icon) storage.icons[name] = icon;
		else storage.missing.add(name);
	});
}
/**
* Add icon to storage
*/
function addIconToStorage(storage, name, icon) {
	try {
		if (typeof icon.body === "string") {
			storage.icons[name] = { ...icon };
			return true;
		}
	} catch (err) {}
	return false;
}
/**
* Allow storing icons without provider or prefix, making it possible to store icons like "home"
*/
var simpleNames = false;
function allowSimpleNames(allow) {
	if (typeof allow === "boolean") simpleNames = allow;
	return simpleNames;
}
/**
* Get icon data
*
* Returns:
* - IconifyIcon on success, object directly from storage so don't modify it
* - null if icon is marked as missing (returned in `not_found` property from API, so don't bother sending API requests)
* - undefined if icon is missing in storage
*/
function getIconData(name) {
	const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
	if (icon) {
		const storage = getStorage(icon.provider, icon.prefix);
		const iconName = icon.name;
		return storage.icons[iconName] || (storage.missing.has(iconName) ? null : void 0);
	}
}
/**
* Add one icon
*/
function addIcon(name, data) {
	const icon = stringToIcon(name, true, simpleNames);
	if (!icon) return false;
	const storage = getStorage(icon.provider, icon.prefix);
	if (data) return addIconToStorage(storage, icon.name, data);
	else {
		storage.missing.add(icon.name);
		return true;
	}
}
/**
* Get full icon
*/
function getIcon(name) {
	const result = getIconData(name);
	return result ? {
		...defaultIconProps$1,
		...result
	} : result;
}
/**
* Default icon customisations values
*/
var defaultIconSizeCustomisations$1 = Object.freeze({
	width: null,
	height: null
});
var defaultIconCustomisations$1 = Object.freeze({
	...defaultIconSizeCustomisations$1,
	...defaultIconTransformations$1
});
/**
* Regular expressions for calculating dimensions
*/
var unitsSplit$1 = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest$1 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize$1(size, ratio, precision) {
	if (ratio === 1) return size;
	precision = precision || 100;
	if (typeof size === "number") return Math.ceil(size * ratio * precision) / precision;
	if (typeof size !== "string") return size;
	const oldParts = size.split(unitsSplit$1);
	if (oldParts === null || !oldParts.length) return size;
	const newParts = [];
	let code = oldParts.shift();
	let isNumber = unitsTest$1.test(code);
	while (true) {
		if (isNumber) {
			const num = parseFloat(code);
			if (isNaN(num)) newParts.push(code);
			else newParts.push(Math.ceil(num * ratio * precision) / precision);
		} else newParts.push(code);
		code = oldParts.shift();
		if (code === void 0) return newParts.join("");
		isNumber = !isNumber;
	}
}
function splitSVGDefs$1(content, tag = "defs") {
	let defs = "";
	const index = content.indexOf("<" + tag);
	while (index >= 0) {
		const start = content.indexOf(">", index);
		const end = content.indexOf("</" + tag);
		if (start === -1 || end === -1) break;
		const endEnd = content.indexOf(">", end);
		if (endEnd === -1) break;
		defs += content.slice(start + 1, end).trim();
		content = content.slice(0, index).trim() + content.slice(endEnd + 1);
	}
	return {
		defs,
		content
	};
}
/**
* Merge defs and content
*/
function mergeDefsAndContent$1(defs, content) {
	return defs ? "<defs>" + defs + "</defs>" + content : content;
}
/**
* Wrap SVG content, without wrapping definitions
*/
function wrapSVGContent$1(body, start, end) {
	const split = splitSVGDefs$1(body);
	return mergeDefsAndContent$1(split.defs, start + split.content + end);
}
/**
* Check if value should be unset. Allows multiple keywords
*/
var isUnsetKeyword$1 = (value) => value === "unset" || value === "undefined" || value === "none";
/**
* Get SVG attributes and content from icon + customisations
*
* Does not generate style to make it compatible with frameworks that use objects for style, such as React.
* Instead, it generates 'inline' value. If true, rendering engine should add verticalAlign: -0.125em to icon.
*
* Customisations should be normalised by platform specific parser.
* Result should be converted to <svg> by platform specific parser.
* Use replaceIDs to generate unique IDs for body.
*/
function iconToSVG$1(icon, customisations) {
	const fullIcon = {
		...defaultIconProps$1,
		...icon
	};
	const fullCustomisations = {
		...defaultIconCustomisations$1,
		...customisations
	};
	const box = {
		left: fullIcon.left,
		top: fullIcon.top,
		width: fullIcon.width,
		height: fullIcon.height
	};
	let body = fullIcon.body;
	[fullIcon, fullCustomisations].forEach((props) => {
		const transformations = [];
		const hFlip = props.hFlip;
		const vFlip = props.vFlip;
		let rotation = props.rotate;
		if (hFlip) {
			if (vFlip) rotation += 2;
			else {
				transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
				transformations.push("scale(-1 1)");
				box.top = box.left = 0;
			}
		} else if (vFlip) {
			transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
			transformations.push("scale(1 -1)");
			box.top = box.left = 0;
		}
		let tempValue;
		if (rotation < 0) rotation -= Math.floor(rotation / 4) * 4;
		rotation = rotation % 4;
		switch (rotation) {
			case 1:
				tempValue = box.height / 2 + box.top;
				transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
				break;
			case 2:
				transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
				break;
			case 3:
				tempValue = box.width / 2 + box.left;
				transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
		}
		if (rotation % 2 === 1) {
			if (box.left !== box.top) {
				tempValue = box.left;
				box.left = box.top;
				box.top = tempValue;
			}
			if (box.width !== box.height) {
				tempValue = box.width;
				box.width = box.height;
				box.height = tempValue;
			}
		}
		if (transformations.length) body = wrapSVGContent$1(body, "<g transform=\"" + transformations.join(" ") + "\">", "</g>");
	});
	const customisationsWidth = fullCustomisations.width;
	const customisationsHeight = fullCustomisations.height;
	const boxWidth = box.width;
	const boxHeight = box.height;
	let width;
	let height;
	if (customisationsWidth === null) {
		height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
		width = calculateSize$1(height, boxWidth / boxHeight);
	} else {
		width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
		height = customisationsHeight === null ? calculateSize$1(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
	}
	const attributes = {};
	const setAttr = (prop, value) => {
		if (!isUnsetKeyword$1(value)) attributes[prop] = value.toString();
	};
	setAttr("width", width);
	setAttr("height", height);
	const viewBox = [
		box.left,
		box.top,
		boxWidth,
		boxHeight
	];
	attributes.viewBox = viewBox.join(" ");
	return {
		attributes,
		viewBox,
		body
	};
}
/**
* Regular expression for finding ids
*/
var regex = /\sid="(\S+)"/g;
/**
* Counters
*/
var counters = /* @__PURE__ */ new Map();
/**
* Get unique new ID
*/
function nextID(id) {
	id = id.replace(/[0-9]+$/, "") || "a";
	const count = counters.get(id) || 0;
	counters.set(id, count + 1);
	return count ? `${id}${count}` : id;
}
/**
* Replace IDs in SVG output with unique IDs
*/
function replaceIDs(body) {
	const ids = [];
	let match;
	while (match = regex.exec(body)) ids.push(match[1]);
	if (!ids.length) return body;
	const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	ids.forEach((id) => {
		const newID = nextID(id);
		const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		body = body.replace(new RegExp("([#;\"])(" + escapedID + ")([\")]|\\.[a-z])", "g"), "$1" + newID + suffix + "$3");
	});
	body = body.replace(new RegExp(suffix, "g"), "");
	return body;
}
/**
* Local storate types and entries
*/
var storage = Object.create(null);
/**
* Set API module
*/
function setAPIModule(provider, item) {
	storage[provider] = item;
}
/**
* Get API module
*/
function getAPIModule(provider) {
	return storage[provider] || storage[""];
}
/**
* Create full API configuration from partial data
*/
function createAPIConfig(source) {
	let resources;
	if (typeof source.resources === "string") resources = [source.resources];
	else {
		resources = source.resources;
		if (!(resources instanceof Array) || !resources.length) return null;
	}
	return {
		resources,
		path: source.path || "/",
		maxURL: source.maxURL || 500,
		rotate: source.rotate || 750,
		timeout: source.timeout || 5e3,
		random: source.random === true,
		index: source.index || 0,
		dataAfterTimeout: source.dataAfterTimeout !== false
	};
}
/**
* Local storage
*/
var configStorage = Object.create(null);
/**
* Redundancy for API servers.
*
* API should have very high uptime because of implemented redundancy at server level, but
* sometimes bad things happen. On internet 100% uptime is not possible.
*
* There could be routing problems. Server might go down for whatever reason, but it takes
* few minutes to detect that downtime, so during those few minutes API might not be accessible.
*
* This script has some redundancy to mitigate possible network issues.
*
* If one host cannot be reached in 'rotate' (750 by default) ms, script will try to retrieve
* data from different host. Hosts have different configurations, pointing to different
* API servers hosted at different providers.
*/
var fallBackAPISources = ["https://api.simplesvg.com", "https://api.unisvg.com"];
var fallBackAPI = [];
while (fallBackAPISources.length > 0) if (fallBackAPISources.length === 1) fallBackAPI.push(fallBackAPISources.shift());
else if (Math.random() > .5) fallBackAPI.push(fallBackAPISources.shift());
else fallBackAPI.push(fallBackAPISources.pop());
configStorage[""] = createAPIConfig({ resources: ["https://api.iconify.design"].concat(fallBackAPI) });
/**
* Add custom config for provider
*/
function addAPIProvider(provider, customConfig) {
	const config = createAPIConfig(customConfig);
	if (config === null) return false;
	configStorage[provider] = config;
	return true;
}
/**
* Get API configuration
*/
function getAPIConfig(provider) {
	return configStorage[provider];
}
/**
* List API providers
*/
function listAPIProviders() {
	return Object.keys(configStorage);
}
var detectFetch = () => {
	let callback;
	try {
		callback = fetch;
		if (typeof callback === "function") return callback;
	} catch (err) {}
};
/**
* Fetch function
*/
var fetchModule = detectFetch();
/**
* Set custom fetch() function
*/
function setFetch(fetch) {
	fetchModule = fetch;
}
/**
* Get fetch() function. Used by Icon Finder Core
*/
function getFetch() {
	return fetchModule;
}
/**
* Calculate maximum icons list length for prefix
*/
function calculateMaxLength(provider, prefix) {
	const config = getAPIConfig(provider);
	if (!config) return 0;
	let result;
	if (!config.maxURL) result = 0;
	else {
		let maxHostLength = 0;
		config.resources.forEach((item) => {
			maxHostLength = Math.max(maxHostLength, item.length);
		});
		const url = prefix + ".json?icons=";
		result = config.maxURL - maxHostLength - config.path.length - url.length;
	}
	return result;
}
/**
* Should query be aborted, based on last HTTP status
*/
function shouldAbort(status) {
	return status === 404;
}
/**
* Prepare params
*/
var prepare = (provider, prefix, icons) => {
	const results = [];
	const maxLength = calculateMaxLength(provider, prefix);
	const type = "icons";
	let item = {
		type,
		provider,
		prefix,
		icons: []
	};
	let length = 0;
	icons.forEach((name, index) => {
		length += name.length + 1;
		if (length >= maxLength && index > 0) {
			results.push(item);
			item = {
				type,
				provider,
				prefix,
				icons: []
			};
			length = name.length;
		}
		item.icons.push(name);
	});
	results.push(item);
	return results;
};
/**
* Get path
*/
function getPath(provider) {
	if (typeof provider === "string") {
		const config = getAPIConfig(provider);
		if (config) return config.path;
	}
	return "/";
}
/**
* Load icons
*/
var send = (host, params, callback) => {
	if (!fetchModule) {
		callback("abort", 424);
		return;
	}
	let path = getPath(params.provider);
	switch (params.type) {
		case "icons": {
			const prefix = params.prefix;
			const iconsList = params.icons.join(",");
			const urlParams = new URLSearchParams({ icons: iconsList });
			path += prefix + ".json?" + urlParams.toString();
			break;
		}
		case "custom": {
			const uri = params.uri;
			path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
			break;
		}
		default:
			callback("abort", 400);
			return;
	}
	let defaultError = 503;
	fetchModule(host + path).then((response) => {
		const status = response.status;
		if (status !== 200) {
			setTimeout(() => {
				callback(shouldAbort(status) ? "abort" : "next", status);
			});
			return;
		}
		defaultError = 501;
		return response.json();
	}).then((data) => {
		if (typeof data !== "object" || data === null) {
			setTimeout(() => {
				if (data === 404) callback("abort", data);
				else callback("next", defaultError);
			});
			return;
		}
		setTimeout(() => {
			callback("success", data);
		});
	}).catch(() => {
		callback("next", defaultError);
	});
};
/**
* Export module
*/
var fetchAPIModule = {
	prepare,
	send
};
/**
* Remove callback
*/
function removeCallback(storages, id) {
	storages.forEach((storage) => {
		const items = storage.loaderCallbacks;
		if (items) storage.loaderCallbacks = items.filter((row) => row.id !== id);
	});
}
/**
* Update all callbacks for provider and prefix
*/
function updateCallbacks(storage) {
	if (!storage.pendingCallbacksFlag) {
		storage.pendingCallbacksFlag = true;
		setTimeout(() => {
			storage.pendingCallbacksFlag = false;
			const items = storage.loaderCallbacks ? storage.loaderCallbacks.slice(0) : [];
			if (!items.length) return;
			let hasPending = false;
			const provider = storage.provider;
			const prefix = storage.prefix;
			items.forEach((item) => {
				const icons = item.icons;
				const oldLength = icons.pending.length;
				icons.pending = icons.pending.filter((icon) => {
					if (icon.prefix !== prefix) return true;
					const name = icon.name;
					if (storage.icons[name]) icons.loaded.push({
						provider,
						prefix,
						name
					});
					else if (storage.missing.has(name)) icons.missing.push({
						provider,
						prefix,
						name
					});
					else {
						hasPending = true;
						return true;
					}
					return false;
				});
				if (icons.pending.length !== oldLength) {
					if (!hasPending) removeCallback([storage], item.id);
					item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
				}
			});
		});
	}
}
/**
* Unique id counter for callbacks
*/
var idCounter = 0;
/**
* Add callback
*/
function storeCallback(callback, icons, pendingSources) {
	const id = idCounter++;
	const abort = removeCallback.bind(null, pendingSources, id);
	if (!icons.pending.length) return abort;
	const item = {
		id,
		icons,
		callback,
		abort
	};
	pendingSources.forEach((storage) => {
		(storage.loaderCallbacks || (storage.loaderCallbacks = [])).push(item);
	});
	return abort;
}
/**
* Check if icons have been loaded
*/
function sortIcons(icons) {
	const result = {
		loaded: [],
		missing: [],
		pending: []
	};
	const storage = Object.create(null);
	icons.sort((a, b) => {
		if (a.provider !== b.provider) return a.provider.localeCompare(b.provider);
		if (a.prefix !== b.prefix) return a.prefix.localeCompare(b.prefix);
		return a.name.localeCompare(b.name);
	});
	let lastIcon = {
		provider: "",
		prefix: "",
		name: ""
	};
	icons.forEach((icon) => {
		if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) return;
		lastIcon = icon;
		const provider = icon.provider;
		const prefix = icon.prefix;
		const name = icon.name;
		const providerStorage = storage[provider] || (storage[provider] = Object.create(null));
		const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
		let list;
		if (name in localStorage.icons) list = result.loaded;
		else if (prefix === "" || localStorage.missing.has(name)) list = result.missing;
		else list = result.pending;
		const item = {
			provider,
			prefix,
			name
		};
		list.push(item);
	});
	return result;
}
/**
* Convert icons list from string/icon mix to icons and validate them
*/
function listToIcons(list, validate = true, simpleNames = false) {
	const result = [];
	list.forEach((item) => {
		const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames) : item;
		if (icon) result.push(icon);
	});
	return result;
}
/**
* Default RedundancyConfig for API calls
*/
var defaultConfig$1 = {
	resources: [],
	index: 0,
	timeout: 2e3,
	rotate: 750,
	random: false,
	dataAfterTimeout: false
};
/**
* Send query
*/
function sendQuery(config, payload, query, done) {
	const resourcesCount = config.resources.length;
	const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
	let resources;
	if (config.random) {
		let list = config.resources.slice(0);
		resources = [];
		while (list.length > 1) {
			const nextIndex = Math.floor(Math.random() * list.length);
			resources.push(list[nextIndex]);
			list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
		}
		resources = resources.concat(list);
	} else resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
	const startTime = Date.now();
	let status = "pending";
	let queriesSent = 0;
	let lastError;
	let timer = null;
	let queue = [];
	let doneCallbacks = [];
	if (typeof done === "function") doneCallbacks.push(done);
	/**
	* Reset timer
	*/
	function resetTimer() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}
	/**
	* Abort everything
	*/
	function abort() {
		if (status === "pending") status = "aborted";
		resetTimer();
		queue.forEach((item) => {
			if (item.status === "pending") item.status = "aborted";
		});
		queue = [];
	}
	/**
	* Add / replace callback to call when execution is complete.
	* This can be used to abort pending query implementations when query is complete or aborted.
	*/
	function subscribe(callback, overwrite) {
		if (overwrite) doneCallbacks = [];
		if (typeof callback === "function") doneCallbacks.push(callback);
	}
	/**
	* Get query status
	*/
	function getQueryStatus() {
		return {
			startTime,
			payload,
			status,
			queriesSent,
			queriesPending: queue.length,
			subscribe,
			abort
		};
	}
	/**
	* Fail query
	*/
	function failQuery() {
		status = "failed";
		doneCallbacks.forEach((callback) => {
			callback(void 0, lastError);
		});
	}
	/**
	* Clear queue
	*/
	function clearQueue() {
		queue.forEach((item) => {
			if (item.status === "pending") item.status = "aborted";
		});
		queue = [];
	}
	/**
	* Got response from module
	*/
	function moduleResponse(item, response, data) {
		const isError = response !== "success";
		queue = queue.filter((queued) => queued !== item);
		switch (status) {
			case "pending": break;
			case "failed":
				if (isError || !config.dataAfterTimeout) return;
				break;
			default: return;
		}
		if (response === "abort") {
			lastError = data;
			failQuery();
			return;
		}
		if (isError) {
			lastError = data;
			if (!queue.length) {
				if (!resources.length) failQuery();
				else execNext();
			}
			return;
		}
		resetTimer();
		clearQueue();
		if (!config.random) {
			const index = config.resources.indexOf(item.resource);
			if (index !== -1 && index !== config.index) config.index = index;
		}
		status = "completed";
		doneCallbacks.forEach((callback) => {
			callback(data);
		});
	}
	/**
	* Execute next query
	*/
	function execNext() {
		if (status !== "pending") return;
		resetTimer();
		const resource = resources.shift();
		if (resource === void 0) {
			if (queue.length) {
				timer = setTimeout(() => {
					resetTimer();
					if (status === "pending") {
						clearQueue();
						failQuery();
					}
				}, config.timeout);
				return;
			}
			failQuery();
			return;
		}
		const item = {
			status: "pending",
			resource,
			callback: (status, data) => {
				moduleResponse(item, status, data);
			}
		};
		queue.push(item);
		queriesSent++;
		timer = setTimeout(execNext, config.rotate);
		query(resource, payload, item.callback);
	}
	setTimeout(execNext);
	return getQueryStatus;
}
/**
* Redundancy instance
*/
function initRedundancy(cfg) {
	const config = {
		...defaultConfig$1,
		...cfg
	};
	let queries = [];
	/**
	* Remove aborted and completed queries
	*/
	function cleanup() {
		queries = queries.filter((item) => item().status === "pending");
	}
	/**
	* Send query
	*/
	function query(payload, queryCallback, doneCallback) {
		const query = sendQuery(config, payload, queryCallback, (data, error) => {
			cleanup();
			if (doneCallback) doneCallback(data, error);
		});
		queries.push(query);
		return query;
	}
	/**
	* Find instance
	*/
	function find(callback) {
		return queries.find((value) => {
			return callback(value);
		}) || null;
	}
	return {
		query,
		find,
		setIndex: (index) => {
			config.index = index;
		},
		getIndex: () => config.index,
		cleanup
	};
}
function emptyCallback$1() {}
var redundancyCache = Object.create(null);
/**
* Get Redundancy instance for provider
*/
function getRedundancyCache(provider) {
	if (!redundancyCache[provider]) {
		const config = getAPIConfig(provider);
		if (!config) return;
		redundancyCache[provider] = {
			config,
			redundancy: initRedundancy(config)
		};
	}
	return redundancyCache[provider];
}
/**
* Send API query
*/
function sendAPIQuery(target, query, callback) {
	let redundancy;
	let send;
	if (typeof target === "string") {
		const api = getAPIModule(target);
		if (!api) {
			callback(void 0, 424);
			return emptyCallback$1;
		}
		send = api.send;
		const cached = getRedundancyCache(target);
		if (cached) redundancy = cached.redundancy;
	} else {
		const config = createAPIConfig(target);
		if (config) {
			redundancy = initRedundancy(config);
			const api = getAPIModule(target.resources ? target.resources[0] : "");
			if (api) send = api.send;
		}
	}
	if (!redundancy || !send) {
		callback(void 0, 424);
		return emptyCallback$1;
	}
	return redundancy.query(query, send, callback)().abort;
}
function emptyCallback() {}
/**
* Function called when new icons have been loaded
*/
function loadedNewIcons(storage) {
	if (!storage.iconsLoaderFlag) {
		storage.iconsLoaderFlag = true;
		setTimeout(() => {
			storage.iconsLoaderFlag = false;
			updateCallbacks(storage);
		});
	}
}
/**
* Check icon names for API
*/
function checkIconNamesForAPI(icons) {
	const valid = [];
	const invalid = [];
	icons.forEach((name) => {
		(name.match(matchIconName) ? valid : invalid).push(name);
	});
	return {
		valid,
		invalid
	};
}
/**
* Parse loader response
*/
function parseLoaderResponse(storage, icons, data) {
	function checkMissing() {
		const pending = storage.pendingIcons;
		icons.forEach((name) => {
			if (pending) pending.delete(name);
			if (!storage.icons[name]) storage.missing.add(name);
		});
	}
	if (data && typeof data === "object") try {
		if (!addIconSet(storage, data).length) {
			checkMissing();
			return;
		}
	} catch (err) {
		console.error(err);
	}
	checkMissing();
	loadedNewIcons(storage);
}
/**
* Handle response that can be async
*/
function parsePossiblyAsyncResponse(response, callback) {
	if (response instanceof Promise) response.then((data) => {
		callback(data);
	}).catch(() => {
		callback(null);
	});
	else callback(response);
}
/**
* Load icons
*/
function loadNewIcons(storage, icons) {
	if (!storage.iconsToLoad) storage.iconsToLoad = icons;
	else storage.iconsToLoad = storage.iconsToLoad.concat(icons).sort();
	if (!storage.iconsQueueFlag) {
		storage.iconsQueueFlag = true;
		setTimeout(() => {
			storage.iconsQueueFlag = false;
			const { provider, prefix } = storage;
			const icons = storage.iconsToLoad;
			delete storage.iconsToLoad;
			if (!icons || !icons.length) return;
			const customIconLoader = storage.loadIcon;
			if (storage.loadIcons && (icons.length > 1 || !customIconLoader)) {
				parsePossiblyAsyncResponse(storage.loadIcons(icons, prefix, provider), (data) => {
					parseLoaderResponse(storage, icons, data);
				});
				return;
			}
			if (customIconLoader) {
				icons.forEach((name) => {
					parsePossiblyAsyncResponse(customIconLoader(name, prefix, provider), (data) => {
						parseLoaderResponse(storage, [name], data ? {
							prefix,
							icons: { [name]: data }
						} : null);
					});
				});
				return;
			}
			const { valid, invalid } = checkIconNamesForAPI(icons);
			if (invalid.length) parseLoaderResponse(storage, invalid, null);
			if (!valid.length) return;
			const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
			if (!api) {
				parseLoaderResponse(storage, valid, null);
				return;
			}
			api.prepare(provider, prefix, valid).forEach((item) => {
				sendAPIQuery(provider, item, (data) => {
					parseLoaderResponse(storage, item.icons, data);
				});
			});
		});
	}
}
/**
* Load icons
*/
var loadIcons = (icons, callback) => {
	const sortedIcons = sortIcons(listToIcons(icons, true, allowSimpleNames()));
	if (!sortedIcons.pending.length) {
		let callCallback = true;
		if (callback) setTimeout(() => {
			if (callCallback) callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
		});
		return () => {
			callCallback = false;
		};
	}
	const newIcons = Object.create(null);
	const sources = [];
	let lastProvider, lastPrefix;
	sortedIcons.pending.forEach((icon) => {
		const { provider, prefix } = icon;
		if (prefix === lastPrefix && provider === lastProvider) return;
		lastProvider = provider;
		lastPrefix = prefix;
		sources.push(getStorage(provider, prefix));
		const providerNewIcons = newIcons[provider] || (newIcons[provider] = Object.create(null));
		if (!providerNewIcons[prefix]) providerNewIcons[prefix] = [];
	});
	sortedIcons.pending.forEach((icon) => {
		const { provider, prefix, name } = icon;
		const storage = getStorage(provider, prefix);
		const pendingQueue = storage.pendingIcons || (storage.pendingIcons = /* @__PURE__ */ new Set());
		if (!pendingQueue.has(name)) {
			pendingQueue.add(name);
			newIcons[provider][prefix].push(name);
		}
	});
	sources.forEach((storage) => {
		const list = newIcons[storage.provider][storage.prefix];
		if (list.length) loadNewIcons(storage, list);
	});
	return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
/**
* Load one icon using Promise
*/
var loadIcon$1 = (icon) => {
	return new Promise((fulfill, reject) => {
		const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
		if (!iconObj) {
			reject(icon);
			return;
		}
		loadIcons([iconObj || icon], (loaded) => {
			if (loaded.length && iconObj) {
				const data = getIconData(iconObj);
				if (data) {
					fulfill({
						...defaultIconProps$1,
						...data
					});
					return;
				}
			}
			reject(icon);
		});
	});
};
/**
* Set custom loader for multiple icons
*/
function setCustomIconsLoader(loader, prefix, provider) {
	getStorage(provider || "", prefix).loadIcons = loader;
}
/**
* Convert IconifyIconCustomisations to FullIconCustomisations, checking value types
*/
function mergeCustomisations(defaults, item) {
	const result = { ...defaults };
	for (const key in item) {
		const value = item[key];
		const valueType = typeof value;
		if (key in defaultIconSizeCustomisations$1) {
			if (value === null || value && (valueType === "string" || valueType === "number")) result[key] = value;
		} else if (valueType === typeof result[key]) result[key] = key === "rotate" ? value % 4 : value;
	}
	return result;
}
var separator = /[\s,]+/;
/**
* Apply "flip" string to icon customisations
*/
function flipFromString(custom, flip) {
	flip.split(separator).forEach((str) => {
		switch (str.trim()) {
			case "horizontal":
				custom.hFlip = true;
				break;
			case "vertical": custom.vFlip = true;
		}
	});
}
/**
* Get rotation value
*/
function rotateFromString(value, defaultValue = 0) {
	const units = value.replace(/^-?[0-9.]*/, "");
	function cleanup(value) {
		while (value < 0) value += 4;
		return value % 4;
	}
	if (units === "") {
		const num = parseInt(value);
		return isNaN(num) ? 0 : cleanup(num);
	} else if (units !== value) {
		let split = 0;
		switch (units) {
			case "%":
				split = 25;
				break;
			case "deg": split = 90;
		}
		if (split) {
			let num = parseFloat(value.slice(0, value.length - units.length));
			if (isNaN(num)) return 0;
			num = num / split;
			return num % 1 === 0 ? cleanup(num) : 0;
		}
	}
	return defaultValue;
}
/**
* Generate <svg>
*/
function iconToHTML$1(body, attributes) {
	let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (const attr in attributes) renderAttribsHTML += " " + attr + "=\"" + attributes[attr] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + renderAttribsHTML + ">" + body + "</svg>";
}
/**
* Encode SVG for use in url()
*
* Short alternative to encodeURIComponent() that encodes only stuff used in SVG, generating
* smaller code.
*/
function encodeSVGforURL$1(svg) {
	return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ").replace(/:/g, "%3A").replace(/\//g, "%2F");
}
/**
* Generate data: URL from SVG
*/
function svgToData$1(svg) {
	return "data:image/svg+xml," + encodeSVGforURL$1(svg);
}
/**
* Generate url() from SVG
*/
function svgToURL$1(svg) {
	return "url(\"" + svgToData$1(svg) + "\")";
}
var defaultExtendedIconCustomisations = {
	...defaultIconCustomisations$1,
	inline: false
};
/**
* Default SVG attributes
*/
var svgDefaults = {
	"xmlns": "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	"aria-hidden": true,
	"role": "img"
};
/**
* Style modes
*/
var commonProps = { display: "inline-block" };
var monotoneProps = { backgroundColor: "currentColor" };
var coloredProps = { backgroundColor: "transparent" };
var propsToAdd = {
	Image: "var(--svg)",
	Repeat: "no-repeat",
	Size: "100% 100%"
};
var propsToAddTo = {
	webkitMask: monotoneProps,
	mask: monotoneProps,
	background: coloredProps
};
for (const prefix in propsToAddTo) {
	const list = propsToAddTo[prefix];
	for (const prop in propsToAdd) list[prefix + prop] = propsToAdd[prop];
}
/**
* Aliases for customisations.
* In Vue 'v-' properties are reserved, so v-flip must be renamed
*/
var customisationAliases = {};
["horizontal", "vertical"].forEach((prefix) => {
	const attr = prefix.slice(0, 1) + "Flip";
	customisationAliases[prefix + "-flip"] = attr;
	customisationAliases[prefix.slice(0, 1) + "-flip"] = attr;
	customisationAliases[prefix + "Flip"] = attr;
});
/**
* Fix size: add 'px' to numbers
*/
function fixSize(value) {
	return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
/**
* Render icon
*/
var render = (icon, props) => {
	const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
	const componentProps = { ...svgDefaults };
	const mode = props.mode || "svg";
	const style = {};
	const propsStyle = props.style;
	const customStyle = typeof propsStyle === "object" && !(propsStyle instanceof Array) ? propsStyle : {};
	for (let key in props) {
		const value = props[key];
		if (value === void 0) continue;
		switch (key) {
			case "icon":
			case "style":
			case "onLoad":
			case "mode":
			case "ssr":
			case "customise": break;
			case "inline":
			case "hFlip":
			case "vFlip":
				customisations[key] = value === true || value === "true" || value === 1;
				break;
			case "flip": break;
			case "color":
				style.color = value;
				break;
			case "rotate":
				if (typeof value === "string") customisations[key] = rotateFromString(value);
				else if (typeof value === "number") customisations[key] = value;
				break;
			case "ariaHidden":
			case "aria-hidden":
				if (value !== true && value !== "true") delete componentProps["aria-hidden"];
				break;
			default: {
				const alias = customisationAliases[key];
				if (alias) {
					if (value === true || value === "true" || value === 1) customisations[alias] = true;
				} else if (defaultExtendedIconCustomisations[key] === void 0) componentProps[key] = value;
			}
		}
	}
	if (typeof props.flip === "string") flipFromString(customisations, props.flip);
	const item = iconToSVG$1(icon, customisations);
	const renderAttribs = item.attributes;
	if (customisations.inline) style.verticalAlign = "-0.125em";
	if (mode === "svg") {
		componentProps.style = {
			...style,
			...customStyle
		};
		Object.assign(componentProps, renderAttribs);
		componentProps["innerHTML"] = replaceIDs(item.body);
		return (0, vue_exports.h)("svg", componentProps);
	}
	const { body, width, height } = icon;
	const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
	const html = iconToHTML$1(body, {
		...renderAttribs,
		width: width + "",
		height: height + ""
	});
	componentProps.style = {
		...style,
		"--svg": svgToURL$1(html),
		"width": fixSize(renderAttribs.width),
		"height": fixSize(renderAttribs.height),
		...commonProps,
		...useMask ? monotoneProps : coloredProps,
		...customStyle
	};
	return (0, vue_exports.h)("span", componentProps);
};
/**
* Initialise stuff
*/
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
/**
* Empty icon data, rendered when icon is not available
*/
var emptyIcon = {
	...defaultIconProps$1,
	body: ""
};
/**
* Component
*/
var Icon = (0, vue_exports.defineComponent)((props, { emit }) => {
	const loader = (0, vue_exports.ref)(null);
	function abortLoading() {
		if (loader.value) {
			loader.value.abort?.();
			loader.value = null;
		}
	}
	const rendering = (0, vue_exports.ref)(!!props.ssr);
	const lastRenderedIconName = (0, vue_exports.ref)("");
	const iconData = (0, vue_exports.shallowRef)(null);
	function getIcon() {
		const icon = props.icon;
		if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
			lastRenderedIconName.value = "";
			return { data: icon };
		}
		let iconName;
		if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) return null;
		let data = getIconData(iconName);
		if (!data) {
			const oldState = loader.value;
			if (!oldState || oldState.name !== icon) {
				if (data === null) loader.value = { name: icon };
				else loader.value = {
					name: icon,
					abort: loadIcons([iconName], updateIconData)
				};
			}
			return null;
		}
		abortLoading();
		if (lastRenderedIconName.value !== icon) {
			lastRenderedIconName.value = icon;
			(0, vue_exports.nextTick)(() => {
				emit("load", icon);
			});
		}
		const customise = props.customise;
		if (customise) {
			data = Object.assign({}, data);
			const customised = customise(data.body, iconName.name, iconName.prefix, iconName.provider);
			if (typeof customised === "string") data.body = customised;
		}
		const classes = ["iconify"];
		if (iconName.prefix !== "") classes.push("iconify--" + iconName.prefix);
		if (iconName.provider !== "") classes.push("iconify--" + iconName.provider);
		return {
			data,
			classes
		};
	}
	function updateIconData() {
		const icon = getIcon();
		if (!icon) iconData.value = null;
		else if (icon.data !== iconData.value?.data) iconData.value = icon;
	}
	if (rendering.value) updateIconData();
	(0, vue_exports.watch)(() => props.icon, updateIconData);
	return () => {
		const icon = iconData.value;
		if (!icon) return render(emptyIcon, props);
		let newProps = props;
		if (icon.classes) newProps = {
			...props,
			class: icon.classes.join(" ")
		};
		return render({
			...defaultIconProps$1,
			...icon.data
		}, newProps);
	};
}, {
	props: {
		icon: {
			type: [String, Object],
			required: true
		},
		mode: { type: String },
		ssr: { type: Boolean },
		width: { type: [String, Number] },
		height: { type: [String, Number] },
		style: { type: [String, Object] },
		color: { type: String },
		inline: { type: Boolean },
		rotate: { type: [Number, String] },
		hFlip: { type: Boolean },
		horizontalFlip: { type: Boolean },
		vFlip: { type: Boolean },
		verticalFlip: { type: Boolean },
		flip: { type: String },
		id: { type: String },
		ariaHidden: {
			type: [Boolean, String],
			default: void 0
		},
		customise: { type: Function },
		title: { type: String }
	},
	emits: ["load"]
});
/**
* Internal API
*/
var _api = {
	getAPIConfig,
	setAPIModule,
	sendAPIQuery,
	setFetch,
	getFetch,
	listAPIProviders
};
//#endregion
//#region node_modules/.pnpm/@nuxt+icon@2.5.1_magic-string@1.4.3_magicast@0.5.5_rolldown@1.2.12_unplugin@3.4.0_esbui_ce1d212eee5d88dc59c3ccae16dec3e4/node_modules/@nuxt/icon/dist/runtime/plugin.js
var plugin_default = defineNuxtPlugin({
	name: "@nuxt/icon",
	setup() {
		const configs = useRuntimeConfig();
		const options = useAppConfig().icon;
		const requestFetch = useRequestFetch();
		const nativeFetch = requestFetch.native;
		_api.setFetch((input, init) => {
			const nitroFetch = globalThis.$fetch?.native;
			return (nativeFetch || nitroFetch || globalThis.fetch)(input, init);
		});
		const resources = [];
		if (options.provider === "server") {
			const baseURL = configs.app?.baseURL?.replace(/\/$/, "") ?? "";
			resources.push(baseURL + (options.localApiEndpoint || "/api/_nuxt_icon"));
			if (options.fallbackToApi === true || options.fallbackToApi === "client-only") resources.push(options.iconifyApiEndpoint);
		} else if (options.provider === "none") _api.setFetch(() => Promise.resolve(new Response()));
		else resources.push(options.iconifyApiEndpoint);
		async function customIconLoader(icons, prefix) {
			try {
				const data = await requestFetch(resources[0] + "/" + prefix + ".json", { query: { icons: icons.join(",") } });
				if (!data || data.prefix !== prefix || !data.icons) throw new Error("Invalid data" + JSON.stringify(data));
				return data;
			} catch (e) {
				console.error("Failed to load custom icons", e);
				return null;
			}
		}
		addAPIProvider("", { resources });
		for (const prefix of options.customCollections || []) if (prefix) setCustomIconsLoader(customIconLoader, prefix);
	}
});
//#endregion
//#region virtual:nuxt:.nuxt%2Fcomponents.plugin.mjs
var lazyGlobalComponents = [["Icon", (0, vue_exports.defineAsyncComponent)(() => Promise.resolve().then(() => components_exports).then((r) => r["default"] || r.default || r))]];
var virtual_nuxt__nuxt_2Fcomponents_plugin_default = defineNuxtPlugin({
	name: "nuxt:global-components",
	setup(nuxtApp) {
		for (const [name, component] of lazyGlobalComponents) {
			nuxtApp.vueApp.component(name, component);
			nuxtApp.vueApp.component("Lazy" + name, component);
		}
	}
});
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/plugins/colors.js
var shades = [
	50,
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800,
	900,
	950
];
function getColor(color, shade) {
	if (color in colors && typeof colors[color] === "object" && shade in colors[color]) return colors[color][shade];
	return "";
}
function generateShades(key, value, prefix) {
	const prefixStr = prefix ? `${prefix}-` : "";
	return `${shades.map((shade) => `--ui-color-${key}-${shade}: var(--${prefixStr}color-${value === "neutral" ? "old-neutral" : value}-${shade}, ${getColor(value, shade)});`).join("\n  ")}`;
}
function generateColor(key, shade) {
	return `--ui-${key}: var(--ui-color-${key}-${shade});`;
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fplugins.server.mjs
var virtual_nuxt__nuxt_2Fplugins_server_default = [
	plugin$2,
	plugin$1,
	plugin,
	plugin_server_default,
	plugin_default,
	virtual_nuxt__nuxt_2Fcomponents_plugin_default,
	defineNuxtPlugin(() => {
		const appConfig = useAppConfig();
		useNuxtApp();
		const root = (0, vue_exports.computed)(() => {
			const { neutral, ...colors2 } = appConfig.ui.colors;
			const prefix = appConfig.ui.prefix;
			return `@layer theme {
  :root, :host {
  ${Object.entries(appConfig.ui.colors).map(([key, value]) => generateShades(key, value, prefix)).join("\n  ")}
  }
  :root, :host, .light {
  ${Object.keys(colors2).map((key) => generateColor(key, 500)).join("\n  ")}
  }
  .dark {
  ${Object.keys(colors2).map((key) => generateColor(key, 400)).join("\n  ")}
  }
}`;
		});
		useHead$1({ style: [{
			innerHTML: root,
			tagPriority: "critical",
			id: "nuxt-ui-colors"
		}] });
	})
];
//#endregion
//#region node_modules/.pnpm/@vue+compiler-ssr@3.5.43/node_modules/@vue/compiler-ssr/dist/compiler-ssr.cjs.js
/**
* @vue/compiler-ssr v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_compiler_ssr_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var compilerDom = require_compiler_dom_cjs_prod();
	var shared = require_shared_cjs_prod();
	var SSR_INTERPOLATE = /* @__PURE__ */ Symbol(`ssrInterpolate`);
	var SSR_RENDER_VNODE = /* @__PURE__ */ Symbol(`ssrRenderVNode`);
	var SSR_RENDER_COMPONENT = /* @__PURE__ */ Symbol(`ssrRenderComponent`);
	var SSR_RENDER_SLOT = /* @__PURE__ */ Symbol(`ssrRenderSlot`);
	var SSR_RENDER_SLOT_INNER = /* @__PURE__ */ Symbol(`ssrRenderSlotInner`);
	var SSR_RENDER_CLASS = /* @__PURE__ */ Symbol(`ssrRenderClass`);
	var SSR_RENDER_STYLE = /* @__PURE__ */ Symbol(`ssrRenderStyle`);
	var SSR_RENDER_ATTRS = /* @__PURE__ */ Symbol(`ssrRenderAttrs`);
	var SSR_RENDER_ATTR = /* @__PURE__ */ Symbol(`ssrRenderAttr`);
	var SSR_RENDER_DYNAMIC_ATTR = /* @__PURE__ */ Symbol(`ssrRenderDynamicAttr`);
	var SSR_RENDER_LIST = /* @__PURE__ */ Symbol(`ssrRenderList`);
	var SSR_INCLUDE_BOOLEAN_ATTR = /* @__PURE__ */ Symbol(`ssrIncludeBooleanAttr`);
	var SSR_LOOSE_EQUAL = /* @__PURE__ */ Symbol(`ssrLooseEqual`);
	var SSR_LOOSE_CONTAIN = /* @__PURE__ */ Symbol(`ssrLooseContain`);
	var SSR_RENDER_DYNAMIC_MODEL = /* @__PURE__ */ Symbol(`ssrRenderDynamicModel`);
	var SSR_GET_DYNAMIC_MODEL_PROPS = /* @__PURE__ */ Symbol(`ssrGetDynamicModelProps`);
	var SSR_RENDER_TELEPORT = /* @__PURE__ */ Symbol(`ssrRenderTeleport`);
	var SSR_RENDER_SUSPENSE = /* @__PURE__ */ Symbol(`ssrRenderSuspense`);
	var SSR_GET_DIRECTIVE_PROPS = /* @__PURE__ */ Symbol(`ssrGetDirectiveProps`);
	var ssrHelpers = {
		[SSR_INTERPOLATE]: `ssrInterpolate`,
		[SSR_RENDER_VNODE]: `ssrRenderVNode`,
		[SSR_RENDER_COMPONENT]: `ssrRenderComponent`,
		[SSR_RENDER_SLOT]: `ssrRenderSlot`,
		[SSR_RENDER_SLOT_INNER]: `ssrRenderSlotInner`,
		[SSR_RENDER_CLASS]: `ssrRenderClass`,
		[SSR_RENDER_STYLE]: `ssrRenderStyle`,
		[SSR_RENDER_ATTRS]: `ssrRenderAttrs`,
		[SSR_RENDER_ATTR]: `ssrRenderAttr`,
		[SSR_RENDER_DYNAMIC_ATTR]: `ssrRenderDynamicAttr`,
		[SSR_RENDER_LIST]: `ssrRenderList`,
		[SSR_INCLUDE_BOOLEAN_ATTR]: `ssrIncludeBooleanAttr`,
		[SSR_LOOSE_EQUAL]: `ssrLooseEqual`,
		[SSR_LOOSE_CONTAIN]: `ssrLooseContain`,
		[SSR_RENDER_DYNAMIC_MODEL]: `ssrRenderDynamicModel`,
		[SSR_GET_DYNAMIC_MODEL_PROPS]: `ssrGetDynamicModelProps`,
		[SSR_RENDER_TELEPORT]: `ssrRenderTeleport`,
		[SSR_RENDER_SUSPENSE]: `ssrRenderSuspense`,
		[SSR_GET_DIRECTIVE_PROPS]: `ssrGetDirectiveProps`
	};
	compilerDom.registerRuntimeHelpers(ssrHelpers);
	var ssrTransformIf = compilerDom.createStructuralDirectiveTransform(/^(?:if|else|else-if)$/, compilerDom.processIf);
	function ssrProcessIf(node, context, disableNestedFragments = false, disableComment = false) {
		const [rootBranch] = node.branches;
		const ifStatement = compilerDom.createIfStatement(rootBranch.condition, processIfBranch(rootBranch, context, disableNestedFragments));
		context.pushStatement(ifStatement);
		let currentIf = ifStatement;
		for (let i = 1; i < node.branches.length; i++) {
			const branch = node.branches[i];
			const branchBlockStatement = processIfBranch(branch, context, disableNestedFragments);
			if (branch.condition) currentIf = currentIf.alternate = compilerDom.createIfStatement(branch.condition, branchBlockStatement);
			else currentIf.alternate = branchBlockStatement;
		}
		if (!currentIf.alternate && !disableComment) currentIf.alternate = compilerDom.createBlockStatement([compilerDom.createCallExpression(`_push`, ["`<!---->`"])]);
	}
	function processIfBranch(branch, context, disableNestedFragments = false) {
		const { children } = branch;
		return processChildrenAsStatement(branch, context, !disableNestedFragments && (children.length !== 1 || children[0].type !== 1) && !(children.length === 1 && children[0].type === 11));
	}
	var ssrTransformFor = compilerDom.createStructuralDirectiveTransform("for", compilerDom.processFor);
	function ssrProcessFor(node, context, disableNestedFragments = false) {
		const needFragmentWrapper = !disableNestedFragments && (node.children.length !== 1 || node.children[0].type !== 1);
		const renderLoop = compilerDom.createFunctionExpression(compilerDom.createForLoopParams(node.parseResult));
		renderLoop.body = processChildrenAsStatement(node, context, needFragmentWrapper);
		if (!disableNestedFragments) context.pushStringPart(`<!--[-->`);
		context.pushStatement(compilerDom.createCallExpression(context.helper(SSR_RENDER_LIST), [node.source, renderLoop]));
		if (!disableNestedFragments) context.pushStringPart(`<!--]-->`);
	}
	var ssrTransformSlotOutlet = (node, context) => {
		if (compilerDom.isSlotOutlet(node)) {
			const { slotName, slotProps } = compilerDom.processSlotOutlet(node, context);
			const args = [
				`_ctx.$slots`,
				slotName,
				slotProps || `{}`,
				`null`,
				`_push`,
				`_parent`
			];
			if (context.scopeId && context.slotted !== false) args.push(`"${context.scopeId}-s"`);
			let method = SSR_RENDER_SLOT;
			let parent = context.parent;
			if (parent) {
				const children = parent.children;
				if (parent.type === 10) parent = context.grandParent;
				let componentType;
				if (parent.type === 1 && parent.tagType === 1 && ((componentType = compilerDom.resolveComponentType(parent, context, true)) === compilerDom.TRANSITION || componentType === compilerDom.TRANSITION_GROUP) && children.filter((c) => c.type === 1).length === 1) {
					method = SSR_RENDER_SLOT_INNER;
					if (!(context.scopeId && context.slotted !== false)) args.push("null");
					args.push("true");
				}
			}
			node.ssrCodegenNode = compilerDom.createCallExpression(context.helper(method), args);
		}
	};
	function ssrProcessSlotOutlet(node, context) {
		const renderCall = node.ssrCodegenNode;
		if (node.children.length) {
			const fallbackRenderFn = compilerDom.createFunctionExpression([]);
			fallbackRenderFn.body = processChildrenAsStatement(node, context);
			renderCall.arguments[3] = fallbackRenderFn;
		}
		if (context.withSlotScopeId) {
			const slotScopeId = renderCall.arguments[6];
			renderCall.arguments[6] = slotScopeId ? `${slotScopeId} + _scopeId` : `_scopeId`;
		}
		context.pushStatement(node.ssrCodegenNode);
	}
	function createSSRCompilerError(code, loc) {
		return compilerDom.createCompilerError(code, loc, SSRErrorMessages);
	}
	var SSRErrorMessages = {
		[65]: `Unsafe attribute name for SSR.`,
		[66]: `Missing the 'to' prop on teleport element.`,
		[67]: `Invalid AST node during SSR transform.`
	};
	function ssrProcessTeleport(node, context) {
		const targetProp = compilerDom.findProp(node, "to");
		if (!targetProp) {
			context.onError(createSSRCompilerError(66, node.loc));
			return;
		}
		let target;
		if (targetProp.type === 6) target = targetProp.value && compilerDom.createSimpleExpression(targetProp.value.content, true);
		else target = targetProp.exp;
		if (!target) {
			context.onError(createSSRCompilerError(66, targetProp.loc));
			return;
		}
		const disabledProp = compilerDom.findProp(node, "disabled", false, true);
		const disabled = disabledProp ? disabledProp.type === 6 ? `true` : disabledProp.exp || `false` : `false`;
		const contentRenderFn = compilerDom.createFunctionExpression([`_push`], void 0, true, false, node.loc);
		contentRenderFn.body = processChildrenAsStatement(node, context);
		context.pushStatement(compilerDom.createCallExpression(context.helper(SSR_RENDER_TELEPORT), [
			`_push`,
			contentRenderFn,
			target,
			disabled,
			`_parent`
		]));
	}
	var wipMap$3 = /* @__PURE__ */ new WeakMap();
	function ssrTransformSuspense(node, context) {
		return () => {
			if (node.children.length) {
				const wipEntry = {
					slotsExp: null,
					wipSlots: []
				};
				wipMap$3.set(node, wipEntry);
				wipEntry.slotsExp = compilerDom.buildSlots(node, context, (_props, _vForExp, children, loc) => {
					const fn = compilerDom.createFunctionExpression([], void 0, true, false, loc);
					wipEntry.wipSlots.push({
						fn,
						children
					});
					return fn;
				}).slots;
			}
		};
	}
	function ssrProcessSuspense(node, context) {
		const wipEntry = wipMap$3.get(node);
		if (!wipEntry) return;
		const { slotsExp, wipSlots } = wipEntry;
		for (let i = 0; i < wipSlots.length; i++) {
			const slot = wipSlots[i];
			slot.fn.body = processChildrenAsStatement(slot, context);
		}
		context.pushStatement(compilerDom.createCallExpression(context.helper(SSR_RENDER_SUSPENSE), [`_push`, slotsExp]));
	}
	var rawChildrenMap = /* @__PURE__ */ new WeakMap();
	var ssrTransformElement = (node, context) => {
		if (node.type !== 1 || node.tagType !== 0) return;
		return function ssrPostTransformElement() {
			const openTag = [`<${node.tag}`];
			const needTagForRuntime = node.tag === "textarea" || node.tag.indexOf("-") > 0;
			const hasDynamicVBind = compilerDom.hasDynamicKeyVBind(node);
			const hasCustomDir = node.props.some((p) => p.type === 7 && !shared.isBuiltInDirective(p.name));
			const vShowPropIndex = node.props.findIndex((i) => i.type === 7 && i.name === "show");
			if (vShowPropIndex !== -1) {
				const vShowProp = node.props[vShowPropIndex];
				node.props.splice(vShowPropIndex, 1);
				node.props.push(vShowProp);
			}
			const needMergeProps = hasDynamicVBind || hasCustomDir;
			if (needMergeProps) {
				const { props, directives } = compilerDom.buildProps(node, context, node.props, false, false, true);
				if (props || directives.length) {
					const mergedProps = buildSSRProps(props, directives, context);
					const propsExp = compilerDom.createCallExpression(context.helper(SSR_RENDER_ATTRS), [mergedProps]);
					if (node.tag === "textarea") {
						const existingText = node.children[0];
						if (!hasContentOverrideDirective(node) && (!existingText || existingText.type !== 5)) {
							const tempId = `_temp${context.temps++}`;
							propsExp.arguments = [compilerDom.createAssignmentExpression(compilerDom.createSimpleExpression(tempId, false), mergedProps)];
							rawChildrenMap.set(node, compilerDom.createCallExpression(context.helper(SSR_INTERPOLATE), [compilerDom.createConditionalExpression(compilerDom.createSimpleExpression(`"value" in ${tempId}`, false), compilerDom.createSimpleExpression(`${tempId}.value`, false), compilerDom.createSimpleExpression(existingText ? existingText.content : ``, true), false)]));
						}
					} else if (node.tag === "input") {
						const vModel = findVModel(node);
						if (vModel) {
							const tempId = `_temp${context.temps++}`;
							const tempExp = compilerDom.createSimpleExpression(tempId, false);
							propsExp.arguments = [compilerDom.createSequenceExpression([compilerDom.createAssignmentExpression(tempExp, mergedProps), compilerDom.createCallExpression(context.helper(compilerDom.MERGE_PROPS), [tempExp, compilerDom.createCallExpression(context.helper(SSR_GET_DYNAMIC_MODEL_PROPS), [tempExp, vModel.exp])])])];
						}
					} else if (directives.length && !node.children.length) {
						if (!hasContentOverrideDirective(node)) {
							const tempId = `_temp${context.temps++}`;
							propsExp.arguments = [compilerDom.createAssignmentExpression(compilerDom.createSimpleExpression(tempId, false), mergedProps)];
							rawChildrenMap.set(node, compilerDom.createConditionalExpression(compilerDom.createSimpleExpression(`"textContent" in ${tempId}`, false), compilerDom.createCallExpression(context.helper(SSR_INTERPOLATE), [compilerDom.createSimpleExpression(`${tempId}.textContent`, false)]), compilerDom.createSimpleExpression(`${tempId}.innerHTML ?? ''`, false), false));
						}
					}
					if (needTagForRuntime) propsExp.arguments.push(`"${node.tag}"`);
					openTag.push(propsExp);
				}
			}
			let dynamicClassBinding = void 0;
			let staticClassBinding = void 0;
			let dynamicStyleBinding = void 0;
			for (let i = 0; i < node.props.length; i++) {
				const prop = node.props[i];
				if (node.tag === "input" && isTrueFalseValue(prop)) continue;
				if (prop.type === 7) {
					if (prop.name === "html" && prop.exp) rawChildrenMap.set(node, compilerDom.createCompoundExpression([
						`(`,
						prop.exp,
						`) ?? ''`
					]));
					else if (prop.name === "text" && prop.exp) node.children = [compilerDom.createInterpolation(prop.exp, prop.loc)];
					else if (prop.name === "slot") context.onError(compilerDom.createCompilerError(40, prop.loc));
					else if (isTextareaWithValue(node, prop) && prop.exp) {
						if (!needMergeProps) node.children = [compilerDom.createInterpolation(prop.exp, prop.loc)];
					} else if (!needMergeProps && prop.name !== "on") {
						const directiveTransform = context.directiveTransforms[prop.name];
						if (directiveTransform) {
							const { props, ssrTagParts } = directiveTransform(prop, node, context);
							if (ssrTagParts) openTag.push(...ssrTagParts);
							for (let j = 0; j < props.length; j++) {
								const { key, value } = props[j];
								if (compilerDom.isStaticExp(key)) {
									let attrName = key.content;
									if (attrName === "key" || attrName === "ref") continue;
									if (attrName === "class") openTag.push(` class="`, dynamicClassBinding = compilerDom.createCallExpression(context.helper(SSR_RENDER_CLASS), [value]), `"`);
									else if (attrName === "style") {
										if (dynamicStyleBinding) mergeCall(dynamicStyleBinding, value);
										else openTag.push(` style="`, dynamicStyleBinding = compilerDom.createCallExpression(context.helper(SSR_RENDER_STYLE), [value]), `"`);
									} else {
										attrName = node.tag.indexOf("-") > 0 ? attrName : shared.propsToAttrMap[attrName] || attrName.toLowerCase();
										if (shared.isBooleanAttr(attrName)) openTag.push(compilerDom.createConditionalExpression(compilerDom.createCallExpression(context.helper(SSR_INCLUDE_BOOLEAN_ATTR), [value]), compilerDom.createSimpleExpression(" " + attrName, true), compilerDom.createSimpleExpression("", true), false));
										else if (attrName === "hidden") openTag.push(compilerDom.createCallExpression(context.helper(SSR_RENDER_DYNAMIC_ATTR), [key, value]));
										else if (shared.isSSRSafeAttrName(attrName)) openTag.push(compilerDom.createCallExpression(context.helper(SSR_RENDER_ATTR), [key, value]));
										else context.onError(createSSRCompilerError(65, key.loc));
									}
								} else {
									const args = [key, value];
									if (needTagForRuntime) args.push(`"${node.tag}"`);
									openTag.push(compilerDom.createCallExpression(context.helper(SSR_RENDER_DYNAMIC_ATTR), args));
								}
							}
						}
					}
				} else {
					const name = prop.name;
					if (node.tag === "textarea" && name === "value" && prop.value) rawChildrenMap.set(node, shared.escapeHtml(prop.value.content));
					else if (!needMergeProps) {
						if (name === "key" || name === "ref") continue;
						if (name === "class" && prop.value) staticClassBinding = JSON.stringify(prop.value.content);
						openTag.push(` ${prop.name}` + (prop.value ? `="${shared.escapeHtml(prop.value.content)}"` : ``));
					}
				}
			}
			if (dynamicClassBinding && staticClassBinding) {
				mergeCall(dynamicClassBinding, staticClassBinding);
				removeStaticBinding(openTag, "class");
			}
			if (context.scopeId) openTag.push(` ${context.scopeId}`);
			node.ssrCodegenNode = compilerDom.createTemplateLiteral(openTag);
		};
	};
	function buildSSRProps(props, directives, context) {
		let mergePropsArgs = [];
		if (props) {
			if (props.type === 14) mergePropsArgs = props.arguments;
			else mergePropsArgs.push(props);
		}
		if (directives.length) for (const dir of directives) mergePropsArgs.push(compilerDom.createCallExpression(context.helper(SSR_GET_DIRECTIVE_PROPS), [`_ctx`, ...compilerDom.buildDirectiveArgs(dir, context).elements]));
		return mergePropsArgs.length > 1 ? compilerDom.createCallExpression(context.helper(compilerDom.MERGE_PROPS), mergePropsArgs) : mergePropsArgs[0];
	}
	function isTrueFalseValue(prop) {
		if (prop.type === 7) return prop.name === "bind" && prop.arg && compilerDom.isStaticExp(prop.arg) && (prop.arg.content === "true-value" || prop.arg.content === "false-value");
		else return prop.name === "true-value" || prop.name === "false-value";
	}
	function isTextareaWithValue(node, prop) {
		return !!(node.tag === "textarea" && prop.name === "bind" && compilerDom.isStaticArgOf(prop.arg, "value"));
	}
	function mergeCall(call, arg) {
		const existing = call.arguments[0];
		if (existing.type === 17) existing.elements.push(arg);
		else call.arguments[0] = compilerDom.createArrayExpression([existing, arg]);
	}
	function removeStaticBinding(tag, binding) {
		const regExp = new RegExp(`^ ${binding}=".+"$`);
		const i = tag.findIndex((e) => typeof e === "string" && regExp.test(e));
		if (i > -1) tag.splice(i, 1);
	}
	function findVModel(node) {
		return node.props.find((p) => p.type === 7 && p.name === "model" && p.exp);
	}
	function hasContentOverrideDirective(node) {
		return !!compilerDom.findDir(node, "text") || !!compilerDom.findDir(node, "html");
	}
	function ssrProcessElement(node, context) {
		const isVoidTag = context.options.isVoidTag || shared.NO;
		const elementsToAdd = node.ssrCodegenNode.elements;
		for (let j = 0; j < elementsToAdd.length; j++) context.pushStringPart(elementsToAdd[j]);
		if (context.withSlotScopeId) context.pushStringPart(compilerDom.createSimpleExpression(`_scopeId`, false));
		context.pushStringPart(`>`);
		const rawChildren = rawChildrenMap.get(node);
		if (rawChildren) context.pushStringPart(rawChildren);
		else if (node.children.length) processChildren(node, context);
		if (!isVoidTag(node.tag)) context.pushStringPart(`</${node.tag}>`);
	}
	var wipMap$2 = /* @__PURE__ */ new WeakMap();
	function ssrTransformTransitionGroup(node, context) {
		return () => {
			const tag = compilerDom.findProp(node, "tag");
			if (tag) {
				const otherProps = node.props.filter((p) => p !== tag);
				const { props, directives } = compilerDom.buildProps(node, context, otherProps, true, false, true);
				let propsExp = null;
				if (props || directives.length) propsExp = compilerDom.createCallExpression(context.helper(SSR_RENDER_ATTRS), [buildSSRProps(props, directives, context)]);
				wipMap$2.set(node, {
					tag,
					propsExp,
					scopeId: context.scopeId || null
				});
			}
		};
	}
	function ssrProcessTransitionGroup(node, context) {
		const entry = wipMap$2.get(node);
		if (entry) {
			const { tag, propsExp, scopeId } = entry;
			if (tag.type === 7) {
				context.pushStringPart(`<`);
				context.pushStringPart(tag.exp);
				if (propsExp) context.pushStringPart(propsExp);
				if (scopeId) context.pushStringPart(` ${scopeId}`);
				context.pushStringPart(`>`);
				processChildren(
					node,
					context,
					false,
					/**
					* TransitionGroup has the special runtime behavior of flattening and
					* concatenating all children into a single fragment (in order for them to
					* be patched using the same key map) so we need to account for that here
					* by disabling nested fragment wrappers from being generated.
					*/
					true,
					/**
					* TransitionGroup filters out comment children at runtime and thus
					* doesn't expect comments to be present during hydration. We need to
					* account for that by disabling the empty comment that is otherwise
					* rendered for a falsy v-if that has no v-else specified. (#6715)
					*/
					true
				);
				context.pushStringPart(`</`);
				context.pushStringPart(tag.exp);
				context.pushStringPart(`>`);
			} else {
				context.pushStringPart(`<${tag.value.content}`);
				if (propsExp) context.pushStringPart(propsExp);
				if (scopeId) context.pushStringPart(` ${scopeId}`);
				context.pushStringPart(`>`);
				processChildren(node, context, false, true, true);
				context.pushStringPart(`</${tag.value.content}>`);
			}
		} else processChildren(node, context, true, true, true);
	}
	var wipMap$1 = /* @__PURE__ */ new WeakMap();
	function ssrTransformTransition(node, context) {
		return () => {
			const appear = compilerDom.findProp(node, "appear", false, true);
			wipMap$1.set(node, !!appear);
		};
	}
	function ssrProcessTransition(node, context) {
		node.children = node.children.filter((c) => c.type !== 3);
		if (wipMap$1.get(node)) {
			context.pushStringPart(`<template>`);
			processChildren(node, context, false, true);
			context.pushStringPart(`</template>`);
		} else processChildren(node, context, false, true);
	}
	var wipMap = /* @__PURE__ */ new WeakMap();
	var WIP_SLOT = /* @__PURE__ */ Symbol();
	var componentTypeMap = /* @__PURE__ */ new WeakMap();
	var ssrTransformComponent = (node, context) => {
		if (node.type !== 1 || node.tagType !== 1) return;
		const component = compilerDom.resolveComponentType(node, context, true);
		const isDynamicComponent = shared.isObject(component) && component.callee === compilerDom.RESOLVE_DYNAMIC_COMPONENT;
		componentTypeMap.set(node, component);
		if (shared.isSymbol(component)) {
			if (component === compilerDom.SUSPENSE) return ssrTransformSuspense(node, context);
			else if (component === compilerDom.TRANSITION_GROUP) return ssrTransformTransitionGroup(node, context);
			else if (component === compilerDom.TRANSITION) return ssrTransformTransition(node);
			return;
		}
		const vnodeBranches = [];
		const clonedNode = clone(node);
		return function ssrPostTransformComponent() {
			if (clonedNode.children.length) compilerDom.buildSlots(clonedNode, context, (props, vFor, children) => {
				vnodeBranches.push(createVNodeSlotBranch(props, vFor, children, context));
				return compilerDom.createFunctionExpression(void 0);
			});
			let propsExp = `null`;
			if (node.props.length) {
				const { props, directives } = compilerDom.buildProps(node, context, void 0, true, isDynamicComponent);
				if (props || directives.length) propsExp = buildSSRProps(props, directives, context);
			}
			const wipEntries = [];
			wipMap.set(node, wipEntries);
			const buildSSRSlotFn = (props, _vForExp, children, loc) => {
				const param0 = props && compilerDom.stringifyExpression(props) || `_`;
				const fn = compilerDom.createFunctionExpression([
					param0,
					`_push`,
					`_parent`,
					`_scopeId`
				], void 0, true, true, loc);
				wipEntries.push({
					type: WIP_SLOT,
					fn,
					children,
					vnodeBranch: vnodeBranches[wipEntries.length]
				});
				return fn;
			};
			const slots = node.children.length ? compilerDom.buildSlots(node, context, buildSSRSlotFn).slots : `null`;
			if (typeof component !== "string") node.ssrCodegenNode = compilerDom.createCallExpression(context.helper(SSR_RENDER_VNODE), [
				`_push`,
				compilerDom.createCallExpression(context.helper(compilerDom.CREATE_VNODE), [
					component,
					propsExp,
					slots
				]),
				`_parent`
			]);
			else node.ssrCodegenNode = compilerDom.createCallExpression(context.helper(SSR_RENDER_COMPONENT), [
				component,
				propsExp,
				slots,
				`_parent`
			]);
		};
	};
	function ssrProcessComponent(node, context, parent) {
		const component = componentTypeMap.get(node);
		if (!node.ssrCodegenNode) {
			if (component === compilerDom.TELEPORT) return ssrProcessTeleport(node, context);
			else if (component === compilerDom.SUSPENSE) return ssrProcessSuspense(node, context);
			else if (component === compilerDom.TRANSITION_GROUP) return ssrProcessTransitionGroup(node, context);
			else {
				if (parent.type === WIP_SLOT) context.pushStringPart(``);
				if (component === compilerDom.TRANSITION) return ssrProcessTransition(node, context);
				processChildren(node, context);
			}
		} else {
			const wipEntries = wipMap.get(node) || [];
			for (let i = 0; i < wipEntries.length; i++) {
				const { fn, vnodeBranch } = wipEntries[i];
				fn.body = compilerDom.createIfStatement(compilerDom.createSimpleExpression(`_push`, false), processChildrenAsStatement(wipEntries[i], context, false, true), vnodeBranch);
			}
			if (context.withSlotScopeId) node.ssrCodegenNode.arguments.push(`_scopeId`);
			if (typeof component === "string") context.pushStatement(compilerDom.createCallExpression(`_push`, [node.ssrCodegenNode]));
			else context.pushStatement(node.ssrCodegenNode);
		}
	}
	var rawOptionsMap = /* @__PURE__ */ new WeakMap();
	var [baseNodeTransforms, baseDirectiveTransforms] = compilerDom.getBaseTransformPreset(true);
	var vnodeNodeTransforms = [...baseNodeTransforms, ...compilerDom.DOMNodeTransforms];
	var vnodeDirectiveTransforms = {
		...baseDirectiveTransforms,
		...compilerDom.DOMDirectiveTransforms
	};
	function createVNodeSlotBranch(slotProps, vFor, children, parentContext) {
		const rawOptions = rawOptionsMap.get(parentContext.root);
		const subOptions = {
			...rawOptions,
			nodeTransforms: [...vnodeNodeTransforms, ...rawOptions.nodeTransforms || []],
			directiveTransforms: {
				...vnodeDirectiveTransforms,
				...rawOptions.directiveTransforms || {}
			}
		};
		const wrapperProps = [];
		if (slotProps) wrapperProps.push({
			type: 7,
			name: "slot",
			exp: slotProps,
			arg: void 0,
			modifiers: [],
			loc: compilerDom.locStub
		});
		if (vFor) wrapperProps.push(shared.extend({}, vFor));
		subTransform({
			type: 1,
			ns: 0,
			tag: "template",
			tagType: 3,
			props: wrapperProps,
			children,
			loc: compilerDom.locStub,
			codegenNode: void 0
		}, subOptions, parentContext);
		return compilerDom.createReturnStatement(children);
	}
	function subTransform(node, options, parentContext) {
		const childRoot = compilerDom.createRoot([node]);
		const childContext = compilerDom.createTransformContext(childRoot, options);
		childContext.ssr = false;
		childContext.scopes = { ...parentContext.scopes };
		childContext.identifiers = { ...parentContext.identifiers };
		childContext.imports = parentContext.imports;
		compilerDom.traverseNode(childRoot, childContext);
		[
			"helpers",
			"components",
			"directives"
		].forEach((key) => {
			childContext[key].forEach((value, helperKey) => {
				if (key === "helpers") {
					const parentCount = parentContext.helpers.get(helperKey);
					if (parentCount === void 0) parentContext.helpers.set(helperKey, value);
					else parentContext.helpers.set(helperKey, value + parentCount);
				} else parentContext[key].add(value);
			});
		});
	}
	function clone(v) {
		if (shared.isArray(v)) return v.map(clone);
		else if (shared.isPlainObject(v)) {
			const res = {};
			for (const key in v) res[key] = clone(v[key]);
			return res;
		} else return v;
	}
	function ssrCodegenTransform(ast, options) {
		const context = createSSRTransformContext(ast, options);
		if (options.ssrCssVars) {
			const cssContext = compilerDom.createTransformContext(compilerDom.createRoot([]), options);
			const varsExp = compilerDom.processExpression(compilerDom.createSimpleExpression(options.ssrCssVars, false), cssContext);
			context.body.push(compilerDom.createCompoundExpression([
				`const _cssVars = { style: `,
				varsExp,
				`}`
			]));
			Array.from(cssContext.helpers.keys()).forEach((helper) => {
				ast.helpers.add(helper);
			});
		}
		processChildren(ast, context, ast.children.length > 1 && ast.children.some((c) => !compilerDom.isText(c)));
		ast.codegenNode = compilerDom.createBlockStatement(context.body);
		ast.ssrHelpers = Array.from(/* @__PURE__ */ new Set([...Array.from(ast.helpers).filter((h) => h in ssrHelpers), ...context.helpers]));
		ast.helpers = new Set(Array.from(ast.helpers).filter((h) => !(h in ssrHelpers)));
	}
	function createSSRTransformContext(root, options, helpers = /* @__PURE__ */ new Set(), withSlotScopeId = false) {
		const body = [];
		let currentString = null;
		return {
			root,
			options,
			body,
			helpers,
			withSlotScopeId,
			onError: options.onError || ((e) => {
				throw e;
			}),
			helper(name) {
				helpers.add(name);
				return name;
			},
			pushStringPart(part) {
				if (!currentString) {
					const currentCall = compilerDom.createCallExpression(`_push`);
					body.push(currentCall);
					currentString = compilerDom.createTemplateLiteral([]);
					currentCall.arguments.push(currentString);
				}
				const bufferedElements = currentString.elements;
				const lastItem = bufferedElements[bufferedElements.length - 1];
				if (shared.isString(part) && shared.isString(lastItem)) bufferedElements[bufferedElements.length - 1] += part;
				else bufferedElements.push(part);
			},
			pushStatement(statement) {
				currentString = null;
				body.push(statement);
			}
		};
	}
	function createChildContext(parent, withSlotScopeId = parent.withSlotScopeId) {
		return createSSRTransformContext(parent.root, parent.options, parent.helpers, withSlotScopeId);
	}
	function processChildren(parent, context, asFragment = false, disableNestedFragments = false, disableComment = false) {
		if (asFragment) context.pushStringPart(`<!--[-->`);
		const { children } = parent;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			switch (child.type) {
				case 1:
					switch (child.tagType) {
						case 0:
							ssrProcessElement(child, context);
							break;
						case 1:
							ssrProcessComponent(child, context, parent);
							break;
						case 2:
							ssrProcessSlotOutlet(child, context);
							break;
						case 3: break;
						default:
							context.onError(createSSRCompilerError(67, child.loc));
							return child;
					}
					break;
				case 2:
					context.pushStringPart(shared.escapeHtml(child.content));
					break;
				case 3:
					if (!disableComment) context.pushStringPart(`<!--${child.content}-->`);
					break;
				case 5:
					context.pushStringPart(compilerDom.createCallExpression(context.helper(SSR_INTERPOLATE), [child.content]));
					break;
				case 9:
					ssrProcessIf(child, context, disableNestedFragments, disableComment);
					break;
				case 11:
					ssrProcessFor(child, context, disableNestedFragments);
					break;
				case 10: break;
				case 12:
				case 8: break;
				default:
					context.onError(createSSRCompilerError(67, child.loc));
					return child;
			}
		}
		if (asFragment) context.pushStringPart(`<!--]-->`);
	}
	function processChildrenAsStatement(parent, parentContext, asFragment = false, withSlotScopeId = parentContext.withSlotScopeId) {
		const childContext = createChildContext(parentContext, withSlotScopeId);
		processChildren(parent, childContext, asFragment);
		return compilerDom.createBlockStatement(childContext.body);
	}
	var ssrTransformModel = (dir, node, context) => {
		const model = dir.exp;
		function checkDuplicatedValue() {
			const value = compilerDom.findProp(node, "value");
			if (value) context.onError(compilerDom.createDOMCompilerError(61, value.loc));
		}
		const processSelectChildren = (children) => {
			children.forEach((child) => {
				if (child.type === 1) processOption(child);
				else if (child.type === 11) processSelectChildren(child.children);
				else if (child.type === 9) child.branches.forEach((b) => processSelectChildren(b.children));
			});
		};
		function processOption(plainNode) {
			if (plainNode.tag === "option") {
				if (plainNode.props.findIndex((p) => p.name === "selected") === -1) {
					const value = findValueBinding(plainNode);
					plainNode.ssrCodegenNode.elements.push(compilerDom.createConditionalExpression(compilerDom.createCallExpression(context.helper(SSR_INCLUDE_BOOLEAN_ATTR), [compilerDom.createConditionalExpression(compilerDom.createCallExpression(`Array.isArray`, [model]), compilerDom.createCallExpression(context.helper(SSR_LOOSE_CONTAIN), [model, value]), compilerDom.createCallExpression(context.helper(SSR_LOOSE_EQUAL), [model, value]))]), compilerDom.createSimpleExpression(" selected", true), compilerDom.createSimpleExpression("", true), false));
				}
			} else if (plainNode.tag === "optgroup") processSelectChildren(plainNode.children);
		}
		if (node.tagType === 0) {
			const res = { props: [] };
			if (node.tag === "input") {
				const defaultProps = [compilerDom.createObjectProperty(`value`, model)];
				const type = compilerDom.findProp(node, "type");
				if (type) {
					const value = findValueBinding(node);
					if (type.type === 7) res.ssrTagParts = [compilerDom.createCallExpression(context.helper(SSR_RENDER_DYNAMIC_MODEL), [
						type.exp,
						model,
						value
					])];
					else if (type.value) switch (type.value.content) {
						case "radio":
							res.props = [compilerDom.createObjectProperty(`checked`, compilerDom.createCallExpression(context.helper(SSR_LOOSE_EQUAL), [model, value]))];
							break;
						case "checkbox":
							const trueValueBinding = compilerDom.findProp(node, "true-value");
							if (trueValueBinding) {
								const trueValue = trueValueBinding.type === 6 ? JSON.stringify(trueValueBinding.value.content) : trueValueBinding.exp;
								res.props = [compilerDom.createObjectProperty(`checked`, compilerDom.createCallExpression(context.helper(SSR_LOOSE_EQUAL), [model, trueValue]))];
							} else res.props = [compilerDom.createObjectProperty(`checked`, compilerDom.createConditionalExpression(compilerDom.createCallExpression(`Array.isArray`, [model]), compilerDom.createCallExpression(context.helper(SSR_LOOSE_CONTAIN), [model, value]), model))];
							break;
						case "file":
							context.onError(compilerDom.createDOMCompilerError(60, dir.loc));
							break;
						default:
							checkDuplicatedValue();
							res.props = defaultProps;
					}
				} else if (compilerDom.hasDynamicKeyVBind(node));
				else {
					checkDuplicatedValue();
					res.props = defaultProps;
				}
			} else if (node.tag === "textarea") {
				checkDuplicatedValue();
				node.children = [compilerDom.createInterpolation(model, model.loc)];
			} else if (node.tag === "select") processSelectChildren(node.children);
			else context.onError(compilerDom.createDOMCompilerError(58, dir.loc));
			return res;
		} else return compilerDom.transformModel(dir, node, context);
	};
	function findValueBinding(node) {
		const valueBinding = compilerDom.findProp(node, "value");
		return valueBinding ? valueBinding.type === 7 ? valueBinding.exp : compilerDom.createSimpleExpression(valueBinding.value.content, true) : compilerDom.createSimpleExpression(`null`, false);
	}
	var ssrTransformShow = (dir, node, context) => {
		if (!dir.exp) context.onError(compilerDom.createDOMCompilerError(62));
		return { props: [compilerDom.createObjectProperty(`style`, compilerDom.createConditionalExpression(dir.exp, compilerDom.createSimpleExpression(`null`, false), compilerDom.createObjectExpression([compilerDom.createObjectProperty(`display`, compilerDom.createSimpleExpression(`none`, true))]), false))] };
	};
	var filterChild = (node) => node.children.filter((n) => !compilerDom.isCommentOrWhitespace(n));
	var hasSingleChild = (node) => filterChild(node).length === 1;
	var ssrInjectFallthroughAttrs = (node, context) => {
		if (node.type === 0) context.identifiers._attrs = 1;
		if (node.type === 1 && node.tagType === 1 && (node.tag === "transition" || node.tag === "Transition" || node.tag === "KeepAlive" || node.tag === "keep-alive")) {
			const rootChildren = filterChild(context.root);
			if (rootChildren.length === 1 && rootChildren[0] === node) {
				if (hasSingleChild(node)) injectFallthroughAttrs(node.children[0]);
				return;
			}
		}
		const parent = context.parent;
		if (!parent || parent.type !== 0) return;
		if (node.type === 10 && hasSingleChild(node)) {
			let hasEncounteredIf = false;
			for (const c of filterChild(parent)) if (c.type === 9 || c.type === 1 && compilerDom.findDir(c, "if")) {
				if (hasEncounteredIf) return;
				hasEncounteredIf = true;
			} else if (!hasEncounteredIf || !(c.type === 1 && compilerDom.findDir(c, /else/, true))) return;
			injectFallthroughAttrs(node.children[0]);
		} else if (hasSingleChild(parent)) injectFallthroughAttrs(node);
	};
	function injectFallthroughAttrs(node) {
		if (node.type === 1 && (node.tagType === 0 || node.tagType === 1) && !compilerDom.findDir(node, "for")) node.props.push({
			type: 7,
			name: "bind",
			arg: void 0,
			exp: compilerDom.createSimpleExpression(`_attrs`, false),
			modifiers: [],
			loc: compilerDom.locStub
		});
	}
	var ssrInjectCssVars = (node, context) => {
		if (!context.ssrCssVars) return;
		if (node.type === 0) context.identifiers._cssVars = 1;
		const parent = context.parent;
		if (!parent || parent.type !== 0) return;
		if (node.type === 10) for (const child of node.children) injectCssVars(child);
		else injectCssVars(node);
	};
	function injectCssVars(node) {
		if (node.type === 1 && (node.tagType === 0 || node.tagType === 1) && !compilerDom.findDir(node, "for")) {
			if (node.tag === "suspense" || node.tag === "Suspense") for (const child of node.children) if (child.type === 1 && child.tagType === 3) child.children.forEach(injectCssVars);
			else injectCssVars(child);
			else node.props.push({
				type: 7,
				name: "bind",
				arg: void 0,
				exp: compilerDom.createSimpleExpression(`_cssVars`, false),
				modifiers: [],
				loc: compilerDom.locStub
			});
		}
	}
	function compile(source, options = {}) {
		options = {
			...options,
			...compilerDom.parserOptions,
			ssr: true,
			inSSR: true,
			scopeId: options.mode === "function" ? null : options.scopeId,
			prefixIdentifiers: true,
			cacheHandlers: false,
			hoistStatic: false
		};
		const ast = typeof source === "string" ? compilerDom.baseParse(source, options) : source;
		rawOptionsMap.set(ast, options);
		compilerDom.transform(ast, {
			...options,
			hoistStatic: false,
			nodeTransforms: [
				compilerDom.transformVBindShorthand,
				ssrTransformIf,
				ssrTransformFor,
				compilerDom.trackVForSlotScopes,
				compilerDom.transformExpression,
				ssrTransformSlotOutlet,
				ssrInjectFallthroughAttrs,
				ssrInjectCssVars,
				ssrTransformElement,
				ssrTransformComponent,
				compilerDom.trackSlotScopes,
				compilerDom.transformStyle,
				...options.nodeTransforms || []
			],
			directiveTransforms: {
				bind: compilerDom.transformBind,
				on: compilerDom.transformOn,
				model: ssrTransformModel,
				show: ssrTransformShow,
				cloak: compilerDom.noopDirectiveTransform,
				once: compilerDom.noopDirectiveTransform,
				memo: compilerDom.noopDirectiveTransform,
				...options.directiveTransforms || {}
			}
		});
		ssrCodegenTransform(ast, options);
		return compilerDom.generate(ast, options);
	}
	exports.compile = compile;
}));
//#endregion
//#region node_modules/.pnpm/@vue+server-renderer@3.5.43/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js
/**
* @vue/server-renderer v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_server_renderer_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var Vue = require_runtime_dom_cjs_prod();
	var shared = require_shared_cjs_prod();
	var compilerSsr = require_compiler_ssr_cjs();
	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) for (var k in e) n[k] = e[k];
		n.default = e;
		return Object.freeze(n);
	}
	var Vue__namespace = /*#__PURE__*/ _interopNamespaceDefault(Vue);
	var shouldIgnoreProp = /* @__PURE__ */ shared.makeMap(`,key,ref,innerHTML,textContent,ref_key,ref_for`);
	function ssrRenderAttrs(props, tag) {
		let ret = "";
		for (let key in props) {
			if (shouldIgnoreProp(key) || shared.isOn(key) || tag === "textarea" && key === "value" || key.startsWith(".")) continue;
			const value = props[key];
			if (key.startsWith("^")) key = key.slice(1);
			if (key === "class") ret += ` class="${ssrRenderClass(value)}"`;
			else if (key === "style") ret += ` style="${ssrRenderStyle(value)}"`;
			else if (key === "className") {
				if (value != null) ret += ` class="${shared.escapeHtml(String(value))}"`;
			} else ret += ssrRenderDynamicAttr(key, value, tag);
		}
		return ret;
	}
	function ssrRenderDynamicAttr(key, value, tag) {
		if (!shared.isRenderableAttrValue(value)) return ``;
		const attrKey = tag && (tag.indexOf("-") > 0 || shared.isSVGTag(tag)) ? key : shared.propsToAttrMap[key] || key.toLowerCase();
		if (shared.isBooleanAttr(attrKey) || attrKey === "hidden" && (typeof value === "boolean" || typeof value === "number")) return shared.includeBooleanAttr(value) ? ` ${attrKey}` : ``;
		else if (shared.isSSRSafeAttrName(attrKey)) return value === "" ? ` ${attrKey}` : ` ${attrKey}="${shared.escapeHtml(value)}"`;
		else {
			console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`);
			return ``;
		}
	}
	function ssrRenderAttr(key, value) {
		if (!shared.isRenderableAttrValue(value)) return ``;
		return ` ${key}="${shared.escapeHtml(value)}"`;
	}
	function ssrRenderClass(raw) {
		return shared.escapeHtml(shared.normalizeClass(raw));
	}
	function ssrRenderStyle(raw) {
		if (!raw) return "";
		if (shared.isString(raw)) return shared.escapeHtml(raw);
		const styles = shared.normalizeStyle(ssrResetCssVars(raw));
		return shared.escapeHtml(shared.stringifyStyle(styles));
	}
	function ssrResetCssVars(raw) {
		if (!shared.isArray(raw) && shared.isObject(raw)) {
			const res = {};
			for (const key in raw) if (key.startsWith(":--")) res[key.slice(1)] = shared.normalizeCssVarValue(raw[key]);
			else res[key] = raw[key];
			return res;
		}
		return raw;
	}
	function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
		return renderComponentVNode(Vue.createVNode(comp, props, children), parentComponent, slotScopeId);
	}
	var { ensureValidVNode } = Vue.ssrUtils;
	function ssrRenderSlot(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
		push(`<!--[-->`);
		ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId);
		push(`<!--]-->`);
	}
	function ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
		const slotFn = slots[slotName];
		if (slotFn) {
			const slotBuffer = [];
			const bufferedPush = (item) => {
				slotBuffer.push(item);
			};
			const ret = slotFn(slotProps || {}, bufferedPush, parentComponent, slotScopeId ? " " + slotScopeId : "");
			if (shared.isArray(ret)) {
				const validSlotContent = ensureValidVNode(ret);
				if (validSlotContent) renderVNodeChildren(push, validSlotContent, parentComponent, slotScopeId);
				else if (fallbackRenderFn) fallbackRenderFn();
				else if (transition) push(`<!---->`);
			} else {
				let isEmptySlot = true;
				if (transition) isEmptySlot = false;
				else for (let i = 0; i < slotBuffer.length; i++) if (!isComment(slotBuffer[i])) {
					isEmptySlot = false;
					break;
				}
				if (isEmptySlot) {
					if (fallbackRenderFn) fallbackRenderFn();
				} else {
					let start = 0;
					let end = slotBuffer.length;
					if (transition && slotBuffer[0] === "<!--[-->" && slotBuffer[end - 1] === "<!--]-->") {
						start++;
						end--;
					}
					if (start < end) for (let i = start; i < end; i++) push(slotBuffer[i]);
					else if (transition) push(`<!---->`);
				}
			}
		} else if (fallbackRenderFn) fallbackRenderFn();
		else if (transition) push(`<!---->`);
	}
	var commentTestRE = /^<!--[\s\S]*-->$/;
	var commentRE = /<!--[^]*?-->/gm;
	function isComment(item) {
		if (typeof item !== "string" || !commentTestRE.test(item)) return false;
		if (item.length <= 8) return true;
		return !item.replace(commentRE, "").trim();
	}
	function ssrRenderTeleport(parentPush, contentRenderFn, target, disabled, parentComponent) {
		parentPush("<!--teleport start-->");
		const context = parentComponent.appContext.provides[Vue.ssrContextKey];
		const teleportBuffers = context.__teleportBuffers || (context.__teleportBuffers = {});
		const targetBuffer = teleportBuffers[target] || (teleportBuffers[target] = []);
		const bufferIndex = targetBuffer.length;
		let teleportContent;
		if (disabled) {
			contentRenderFn(parentPush);
			teleportContent = `<!--teleport start anchor--><!--teleport anchor-->`;
		} else {
			const { getBuffer, push } = createBuffer();
			push(`<!--teleport start anchor-->`);
			contentRenderFn(push);
			push(`<!--teleport anchor-->`);
			teleportContent = getBuffer();
		}
		targetBuffer.splice(bufferIndex, 0, teleportContent);
		if (shared.isPromise(teleportContent) || shared.isArray(teleportContent) && teleportContent.hasAsync) targetBuffer.hasAsync = true;
		parentPush("<!--teleport end-->");
	}
	function ssrInterpolate(value) {
		return shared.escapeHtml(shared.toDisplayString(value));
	}
	function ssrRenderList(source, renderItem) {
		if (shared.isArray(source) || shared.isString(source)) for (let i = 0, l = source.length; i < l; i++) renderItem(source[i], i);
		else if (typeof source === "number") for (let i = 0; i < source; i++) renderItem(i + 1, i);
		else if (shared.isObject(source)) {
			if (source[Symbol.iterator]) {
				let i = 0;
				for (const item of source) renderItem(item, i++);
			} else {
				const keys = Object.keys(source);
				for (let i = 0, l = keys.length; i < l; i++) {
					const key = keys[i];
					renderItem(source[key], key, i);
				}
			}
		}
	}
	function ssrRenderSuspense(push, { default: renderContent }) {
		if (renderContent) renderContent();
		else push(`<!---->`);
	}
	function ssrGetDirectiveProps(instance, dir, value, arg, modifiers = {}) {
		if (typeof dir !== "function" && dir.getSSRProps) return dir.getSSRProps({
			dir,
			instance: Vue.ssrUtils.getComponentPublicInstance(instance.$),
			value,
			oldValue: void 0,
			arg,
			modifiers
		}, null) || {};
		return {};
	}
	var ssrLooseEqual = shared.looseEqual;
	function ssrLooseContain(arr, value) {
		return shared.looseIndexOf(arr, value) > -1;
	}
	function ssrRenderDynamicModel(type, model, value) {
		switch (type) {
			case "radio": return shared.looseEqual(model, value) ? " checked" : "";
			case "checkbox": return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? " checked" : "";
			default: return ssrRenderAttr("value", model);
		}
	}
	function ssrGetDynamicModelProps(existingProps = {}, model) {
		const { type, value } = existingProps;
		switch (type) {
			case "radio": return shared.looseEqual(model, value) ? { checked: true } : null;
			case "checkbox": return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? { checked: true } : null;
			default: return { value: model };
		}
	}
	var helpers = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		ssrGetDirectiveProps,
		ssrGetDynamicModelProps,
		ssrIncludeBooleanAttr: shared.includeBooleanAttr,
		ssrInterpolate,
		ssrLooseContain,
		ssrLooseEqual,
		ssrRenderAttr,
		ssrRenderAttrs,
		ssrRenderClass,
		ssrRenderComponent,
		ssrRenderDynamicAttr,
		ssrRenderDynamicModel,
		ssrRenderList,
		ssrRenderSlot,
		ssrRenderSlotInner,
		ssrRenderStyle,
		ssrRenderSuspense,
		ssrRenderTeleport,
		ssrRenderVNode: renderVNode
	});
	var compileCache = /* @__PURE__ */ Object.create(null);
	function ssrCompile(template, instance) {
		const Component = instance.type;
		const { isCustomElement, compilerOptions } = instance.appContext.config;
		const { delimiters, compilerOptions: componentCompilerOptions } = Component;
		const finalCompilerOptions = shared.extend(shared.extend({
			isCustomElement,
			delimiters
		}, compilerOptions), componentCompilerOptions);
		finalCompilerOptions.isCustomElement = finalCompilerOptions.isCustomElement || shared.NO;
		finalCompilerOptions.isNativeTag = finalCompilerOptions.isNativeTag || shared.NO;
		const cacheKey = JSON.stringify({
			template,
			compilerOptions: finalCompilerOptions
		}, (key, value) => {
			return shared.isFunction(value) ? value.toString() : value;
		});
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		finalCompilerOptions.onError = (err) => {
			throw err;
		};
		const { code } = compilerSsr.compile(template, finalCompilerOptions);
		const requireMap = {
			vue: Vue__namespace,
			"vue/server-renderer": helpers
		};
		const fakeRequire = (id) => requireMap[id];
		return compileCache[cacheKey] = Function("require", code)(fakeRequire);
	}
	var { createComponentInstance, setCurrentRenderingInstance, setupComponent, renderComponentRoot, normalizeVNode, pushWarningContext, popWarningContext } = Vue.ssrUtils;
	function createBuffer() {
		let appendable = false;
		const buffer = [];
		return {
			getBuffer() {
				return buffer;
			},
			push(item) {
				const isStringItem = shared.isString(item);
				if (appendable && isStringItem) {
					buffer[buffer.length - 1] += item;
					return;
				}
				buffer.push(item);
				appendable = isStringItem;
				if (shared.isPromise(item) || shared.isArray(item) && item.hasAsync) buffer.hasAsync = true;
			}
		};
	}
	function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
		const instance = vnode.component = createComponentInstance(vnode, parentComponent, null);
		const res = setupComponent(instance, true);
		const hasAsyncSetup = shared.isPromise(res);
		let prefetches = instance.sp;
		if (hasAsyncSetup || prefetches) return Promise.resolve(res).then(() => {
			if (hasAsyncSetup) prefetches = instance.sp;
			if (prefetches) return Promise.all(prefetches.map((prefetch) => prefetch.call(instance.proxy)));
		}).catch(shared.NOOP).then(() => renderComponentSubTree(instance, slotScopeId));
		else try {
			return renderComponentSubTree(instance, slotScopeId);
		} catch (err) {
			return Promise.reject(err);
		}
	}
	function renderComponentSubTree(instance, slotScopeId) {
		const comp = instance.type;
		const { getBuffer, push } = createBuffer();
		if (shared.isFunction(comp)) {
			let root = renderComponentRoot(instance);
			if (!comp.props) {
				for (const key in instance.attrs) if (key.startsWith(`data-v-`)) (root.props || (root.props = {}))[key] = ``;
			}
			renderVNode(push, instance.subTree = root, instance, slotScopeId);
		} else {
			if ((!instance.render || instance.render === shared.NOOP) && !instance.ssrRender && !comp.ssrRender && shared.isString(comp.template)) comp.ssrRender = ssrCompile(comp.template, instance);
			const ssrRender = instance.ssrRender || comp.ssrRender;
			if (ssrRender) {
				let attrs = instance.inheritAttrs !== false ? instance.attrs : void 0;
				let hasCloned = false;
				let cur = instance;
				while (true) {
					const scopeId = cur.vnode.scopeId;
					if (scopeId) {
						if (!hasCloned) {
							attrs = { ...attrs };
							hasCloned = true;
						}
						attrs[scopeId] = "";
					}
					const parent = cur.parent;
					if (parent && parent.subTree && parent.subTree === cur.vnode) cur = parent;
					else break;
				}
				if (slotScopeId) {
					if (!hasCloned) attrs = { ...attrs };
					const slotScopeIdList = slotScopeId.trim().split(" ");
					for (let i = 0; i < slotScopeIdList.length; i++) attrs[slotScopeIdList[i]] = "";
				}
				const prev = setCurrentRenderingInstance(instance);
				try {
					ssrRender(instance.proxy, push, instance, attrs, instance.props, instance.setupState, instance.data, instance.ctx);
				} catch (err) {
					Vue.handleError(err, instance, 1);
				} finally {
					setCurrentRenderingInstance(prev);
				}
			} else if (instance.render && instance.render !== shared.NOOP) renderVNode(push, instance.subTree = renderComponentRoot(instance), instance, slotScopeId);
			else {
				const componentName = comp.name || comp.__file || `<Anonymous>`;
				Vue.warn(`Component ${componentName} is missing template or render function.`);
				push(`<!---->`);
			}
		}
		return getBuffer();
	}
	function renderVNode(push, vnode, parentComponent, slotScopeId) {
		const { type, shapeFlag, children, dirs, props } = vnode;
		if (dirs) vnode.props = applySSRDirectives(vnode, props, dirs);
		switch (type) {
			case Vue.Text:
				push(shared.escapeHtml(children));
				break;
			case Vue.Comment:
				push(children ? `<!--${shared.escapeHtmlComment(children)}-->` : `<!---->`);
				break;
			case Vue.Static:
				push(children);
				break;
			case Vue.Fragment:
				if (vnode.slotScopeIds) slotScopeId = (slotScopeId ? slotScopeId + " " : "") + vnode.slotScopeIds.join(" ");
				push(`<!--[-->`);
				renderVNodeChildren(push, children, parentComponent, slotScopeId);
				push(`<!--]-->`);
				break;
			default: if (shapeFlag & 1) renderElementVNode(push, vnode, parentComponent, slotScopeId);
			else if (shapeFlag & 6) push(renderComponentVNode(vnode, parentComponent, slotScopeId));
			else if (shapeFlag & 64) renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
			else if (shapeFlag & 128) renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
			else Vue.warn("[@vue/server-renderer] Invalid VNode type:", type, `(${typeof type})`);
		}
	}
	function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
		for (let i = 0; i < children.length; i++) renderVNode(push, normalizeVNode(children[i]), parentComponent, slotScopeId);
	}
	function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
		const tag = vnode.type;
		let { props, children, shapeFlag, scopeId } = vnode;
		let openTag = `<${tag}`;
		if (props) openTag += ssrRenderAttrs(props, tag);
		const renderedScopeIds = [];
		const appendScopeId = (id) => {
			if (id && (!props || !shared.hasOwn(props, id)) && !renderedScopeIds.includes(id)) {
				openTag += ` ${id}`;
				renderedScopeIds.push(id);
			}
		};
		if (scopeId) appendScopeId(scopeId);
		let curParent = parentComponent;
		let curVnode = vnode;
		while (curParent && curVnode === curParent.subTree) {
			curVnode = curParent.vnode;
			if (curVnode.scopeId) appendScopeId(curVnode.scopeId);
			curParent = curParent.parent;
		}
		if (slotScopeId) {
			const slotScopeIdList = slotScopeId.trim().split(" ");
			for (let i = 0; i < slotScopeIdList.length; i++) appendScopeId(slotScopeIdList[i]);
		}
		push(openTag + `>`);
		if (!shared.isVoidTag(tag)) {
			let hasChildrenOverride = false;
			if (props) {
				if (props.innerHTML) {
					hasChildrenOverride = true;
					push(props.innerHTML);
				} else if (props.textContent) {
					hasChildrenOverride = true;
					push(shared.escapeHtml(props.textContent));
				} else if (tag === "textarea" && props.value) {
					hasChildrenOverride = true;
					push(shared.escapeHtml(props.value));
				}
			}
			if (!hasChildrenOverride) {
				if (shapeFlag & 8) push(shared.escapeHtml(children));
				else if (shapeFlag & 16) renderVNodeChildren(push, children, parentComponent, slotScopeId);
			}
			push(`</${tag}>`);
		}
	}
	function applySSRDirectives(vnode, rawProps, dirs) {
		const toMerge = [];
		for (let i = 0; i < dirs.length; i++) {
			const binding = dirs[i];
			const { dir: { getSSRProps } } = binding;
			if (getSSRProps) {
				const props = getSSRProps(binding, vnode);
				if (props) toMerge.push(props);
			}
		}
		return Vue.mergeProps(rawProps || {}, ...toMerge);
	}
	function renderTeleportVNode(push, vnode, parentComponent, slotScopeId) {
		const target = vnode.props && vnode.props.to;
		const disabled = vnode.props && vnode.props.disabled;
		if (!target) {
			if (!disabled) Vue.warn(`[@vue/server-renderer] Teleport is missing target prop.`);
			return [];
		}
		if (!shared.isString(target)) {
			Vue.warn(`[@vue/server-renderer] Teleport target must be a query selector string.`);
			return [];
		}
		ssrRenderTeleport(push, (push2) => {
			renderVNodeChildren(push2, vnode.children, parentComponent, slotScopeId);
		}, target, disabled || disabled === "", parentComponent);
	}
	var { isVNode: isVNode$1 } = Vue.ssrUtils;
	var { isVNode } = Vue.ssrUtils;
	Vue.initDirectivesForSSR();
	exports.ssrIncludeBooleanAttr = shared.includeBooleanAttr;
	exports.ssrInterpolate = ssrInterpolate;
	exports.ssrRenderAttr = ssrRenderAttr;
	exports.ssrRenderAttrs = ssrRenderAttrs;
	exports.ssrRenderClass = ssrRenderClass;
	exports.ssrRenderComponent = ssrRenderComponent;
	exports.ssrRenderList = ssrRenderList;
	exports.ssrRenderSlot = ssrRenderSlot;
	exports.ssrRenderStyle = ssrRenderStyle;
	exports.ssrRenderSuspense = ssrRenderSuspense;
	exports.ssrRenderVNode = renderVNode;
}));
//#endregion
//#region node_modules/.pnpm/vue@3.5.43_typescript@5.7.3/node_modules/vue/server-renderer/index.mjs
var server_renderer_exports = /* @__PURE__ */ __exportAll({});
__reExport(server_renderer_exports, /* @__PURE__ */ __toESM(require_server_renderer_cjs_prod(), 1));
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/createContext.js
/**
* @param providerComponentName - The name(s) of the component(s) providing the context.
*
* There are situations where context can come from multiple components. In such cases, you might need to give an array of component names to provide your context, instead of just a single string.
*
* @param contextName The description for injection key symbol.
*/
function createContext(providerComponentName, contextName) {
	const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
	const injectionKey = Symbol(symbolDescription);
	/**
	* @param fallback The context value to return if the injection fails.
	*
	* @throws When context injection failed and no fallback is specified.
	* This happens when the component injecting the context is not a child of the root component providing the context.
	*/
	const injectContext = (fallback) => {
		const context = (0, vue_exports.inject)(injectionKey, fallback);
		if (context) return context;
		if (context === null) return context;
		throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
	};
	const provideContext = (contextValue) => {
		(0, vue_exports.provide)(injectionKey, contextValue);
		return contextValue;
	};
	return [injectContext, provideContext];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/getActiveElement.js
function getActiveElement() {
	let activeElement = (void 0).activeElement;
	if (activeElement == null) return null;
	while (activeElement != null && activeElement.shadowRoot != null && activeElement.shadowRoot.activeElement != null) activeElement = activeElement.shadowRoot.activeElement;
	return activeElement;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/nullish.js
function isNullish(value) {
	return value === null || value === void 0;
}
//#endregion
//#region node_modules/.pnpm/@vueuse+shared@14.4.0_vue@3.5.43_typescript@5.7.3_/node_modules/@vueuse/shared/dist/index.js
/**
* Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
*
* @param fn
*/
function tryOnScopeDispose(fn, failSilently) {
	if ((0, vue_exports.getCurrentScope)()) {
		(0, vue_exports.onScopeDispose)(fn, failSilently);
		return true;
	}
	return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var isDef = (val) => typeof val !== "undefined";
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {};
function toRef$5(...args) {
	if (args.length !== 1) return (0, vue_exports.toRef)(...args);
	const r = args[0];
	return typeof r === "function" ? (0, vue_exports.readonly)((0, vue_exports.customRef)(() => ({
		get: r,
		set: noop
	}))) : (0, vue_exports.ref)(r);
}
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
/**
* Make a composable function usable with multiple Vue instances.
*
* @see https://vueuse.org/createSharedComposable
*
* @__NO_SIDE_EFFECTS__
*/
function createSharedComposable(composable) {
	return composable;
}
/**
* Converts ref to reactive.
*
* @see https://vueuse.org/toReactive
* @param objectRef A ref of object
*/
function toReactive(objectRef) {
	if (!(0, vue_exports.isRef)(objectRef)) return (0, vue_exports.reactive)(objectRef);
	return (0, vue_exports.reactive)(new Proxy({}, {
		get(_, p, receiver) {
			return (0, vue_exports.unref)(Reflect.get(objectRef.value, p, receiver));
		},
		set(_, p, value) {
			if ((0, vue_exports.isRef)(objectRef.value[p]) && !(0, vue_exports.isRef)(value)) objectRef.value[p].value = value;
			else objectRef.value[p] = value;
			return true;
		},
		deleteProperty(_, p) {
			return Reflect.deleteProperty(objectRef.value, p);
		},
		has(_, p) {
			return Reflect.has(objectRef.value, p);
		},
		ownKeys() {
			return Object.keys(objectRef.value);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true
			};
		}
	}));
}
/**
* Computed reactive object.
*/
function reactiveComputed(fn) {
	return toReactive((0, vue_exports.computed)(fn));
}
/**
* Reactively omit fields from a reactive object
*
* @see https://vueuse.org/reactiveOmit
*/
function reactiveOmit(obj, ...keys) {
	const flatKeys = keys.flat();
	const predicate = flatKeys[0];
	return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries((0, vue_exports.toRefs)(obj)).filter(([k, v]) => !predicate((0, vue_exports.toValue)(v), k))) : Object.fromEntries(Object.entries((0, vue_exports.toRefs)(obj)).filter((e) => !flatKeys.includes(e[0]))));
}
/**
* Reactively pick fields from a reactive object
*
* @see https://vueuse.org/reactivePick
*/
function reactivePick(obj, ...keys) {
	const flatKeys = keys.flat();
	const predicate = flatKeys[0];
	return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries((0, vue_exports.toRefs)(obj)).filter(([k, v]) => predicate((0, vue_exports.toValue)(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef$5(obj, k)])));
}
/**
* Wrapper for `setTimeout` with controls.
*
* @param cb
* @param interval
* @param options
*/
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const isPending = (0, vue_exports.shallowRef)(false);
	let timer;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		if (immediateCallback) cb();
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = void 0;
			cb(...args);
		}, (0, vue_exports.toValue)(interval));
	}
	if (immediate) isPending.value = true;
	tryOnScopeDispose(stop);
	return {
		isPending: (0, vue_exports.shallowReadonly)(isPending),
		start,
		stop
	};
}
function useTimeout(interval = 1e3, options = {}) {
	const { controls: exposeControls = false, callback } = options;
	const controls = useTimeoutFn(callback !== null && callback !== void 0 ? callback : noop, interval, options);
	const ready = (0, vue_exports.computed)(() => !controls.isPending.value);
	if (exposeControls) return {
		ready,
		...controls
	};
	else return ready;
}
/**
* Shorthand for watching value with {immediate: true}
*
* @see https://vueuse.org/watchImmediate
*/
function watchImmediate(source, cb, options) {
	return (0, vue_exports.watch)(source, cb, {
		...options,
		immediate: true
	});
}
//#endregion
//#region node_modules/.pnpm/@vueuse+core@14.4.0_vue@3.5.43_typescript@5.7.3_/node_modules/@vueuse/core/dist/index.js
var defaultWindow = void 0;
/**
* Get the dom element of a ref of element or Vue component instance
*
* @param elRef
*/
function unrefElement(elRef) {
	var _$el;
	const plain = (0, vue_exports.toValue)(elRef);
	return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = (0, vue_exports.computed)(() => {
		const test = toArray((0, vue_exports.toValue)(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	return watchImmediate(() => {
		var _firstParamTargets$va, _firstParamTargets$va2;
		return [
			(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
			toArray((0, vue_exports.toValue)(firstParamTargets.value ? args[1] : args[0])),
			toArray((0, vue_exports.unref)(firstParamTargets.value ? args[2] : args[1])),
			(0, vue_exports.toValue)(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
		if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
		const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
		onCleanup(() => {
			cleanups.forEach((fn) => fn());
		});
	}, { flush: "post" });
}
/**
* Mounted state in ref.
*
* @see https://vueuse.org/useMounted
*
* @__NO_SIDE_EFFECTS__
*/
function useMounted() {
	const isMounted = (0, vue_exports.shallowRef)(false);
	if ((0, vue_exports.getCurrentInstance)());
	return isMounted;
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && (0, vue_exports.toValue)(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener(target, eventName, listener, passive);
}
/**
* Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
*
* @see https://vueuse.org/useRafFn
* @param fn
* @param options
*/
function useRafFn(fn, options = {}) {
	const { immediate = true, fpsLimit = null, window = defaultWindow, once = false } = options;
	const isActive = (0, vue_exports.shallowRef)(false);
	const intervalLimit = (0, vue_exports.computed)(() => {
		const limit = (0, vue_exports.toValue)(fpsLimit);
		return limit ? 1e3 / limit : null;
	});
	let previousFrameTimestamp = 0;
	let rafId = null;
	function loop(timestamp) {
		if (!isActive.value || !window) return;
		if (!previousFrameTimestamp) previousFrameTimestamp = timestamp;
		const delta = timestamp - previousFrameTimestamp;
		if (intervalLimit.value && delta < intervalLimit.value) {
			rafId = window.requestAnimationFrame(loop);
			return;
		}
		previousFrameTimestamp = timestamp;
		fn({
			delta,
			timestamp
		});
		if (once) {
			isActive.value = false;
			rafId = null;
			return;
		}
		rafId = window.requestAnimationFrame(loop);
	}
	function resume() {
		if (!isActive.value && window) {
			isActive.value = true;
			previousFrameTimestamp = 0;
			rafId = window.requestAnimationFrame(loop);
		}
	}
	function pause() {
		isActive.value = false;
		if (rafId != null && window) {
			window.cancelAnimationFrame(rafId);
			rafId = null;
		}
	}
	if (immediate) resume();
	tryOnScopeDispose(pause);
	return {
		isActive: (0, vue_exports.shallowReadonly)(isActive),
		pause,
		resume
	};
}
function cloneFnJSON(source) {
	return JSON.parse(JSON.stringify(source));
}
/**
* Shorthand for v-model binding, props + emit -> ref
*
* @see https://vueuse.org/useVModel
* @param props
* @param key (default 'modelValue')
* @param emit
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useVModel(props, key, emit, options = {}) {
	var _vm$$emit, _vm$proxy;
	const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
	const vm = (0, vue_exports.getCurrentInstance)();
	const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || (vm === null || vm === void 0 || (_vm$$emit = vm.$emit) === null || _vm$$emit === void 0 ? void 0 : _vm$$emit.bind(vm)) || (vm === null || vm === void 0 || (_vm$proxy = vm.proxy) === null || _vm$proxy === void 0 || (_vm$proxy = _vm$proxy.$emit) === null || _vm$proxy === void 0 ? void 0 : _vm$proxy.bind(vm === null || vm === void 0 ? void 0 : vm.proxy));
	let event = eventName;
	if (!key) key = "modelValue";
	event = event || `update:${key.toString()}`;
	const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
	const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
	const triggerEmit = (value) => {
		if (shouldEmit) {
			if (shouldEmit(value)) _emit(event, value);
		} else _emit(event, value);
	};
	if (passive) {
		const proxy = (0, vue_exports.ref)(getValue());
		let isUpdating = false;
		(0, vue_exports.watch)(() => props[key], (v) => {
			if (!isUpdating) {
				isUpdating = true;
				proxy.value = cloneFn(v);
				(0, vue_exports.nextTick)(() => isUpdating = false);
			}
		});
		(0, vue_exports.watch)(proxy, (v) => {
			if (!isUpdating && (v !== props[key] || deep)) triggerEmit(v);
		}, { deep });
		return proxy;
	} else return (0, vue_exports.computed)({
		get() {
			return getValue();
		},
		set(value) {
			triggerEmit(value);
		}
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/renderSlotFragments.js
function renderSlotFragments(children) {
	if (!children) return [];
	return children.flatMap((child) => {
		if (child.type === vue_exports.Fragment) return renderSlotFragments(child.children);
		return [child];
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [injectConfigProviderContext, provideConfigProviderContext] = /*#__PURE__*/ createContext("ConfigProvider");
var ConfigProvider_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	inheritAttrs: false,
	__name: "ConfigProvider",
	props: {
		dir: {
			type: String,
			required: false,
			default: "ltr"
		},
		locale: {
			type: String,
			required: false,
			default: "en"
		},
		scrollBody: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		nonce: {
			type: String,
			required: false,
			default: void 0
		},
		teleportTo: {
			type: null,
			required: false,
			default: void 0
		},
		useId: {
			type: Function,
			required: false,
			default: void 0
		}
	},
	setup(__props) {
		const props = __props;
		const { dir, locale, scrollBody, nonce, teleportTo } = (0, vue_exports.toRefs)(props);
		provideConfigProviderContext({
			dir,
			locale,
			scrollBody,
			nonce,
			teleportTo,
			useId: props.useId
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.renderSlot)(_ctx.$slots, "default");
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/useEmitAsProps.js
/**
* The `useEmitAsProps` function is a TypeScript utility that converts emitted events into props for a
* Vue component.
*
* @template Name - The event name string union type.
* @template Fn - The emit function type.
*
* @param emit - The `emit` parameter is a function that is used to emit events from a component. It
*
* takes two parameters: `name` which is the name of the event to be emitted, and `...args` which are
* the arguments to be passed along with the event.
* @returns The function `useEmitAsProps` returns an object that maps event names to functions that
* call the `emit` function with the corresponding event name and arguments.
*/
function useEmitAsProps(emit) {
	const vm = (0, vue_exports.getCurrentInstance)();
	const events = vm?.type.emits;
	const result = {};
	if (!events?.length) console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`);
	events?.forEach((ev) => {
		result[(0, vue_exports.toHandlerKey)((0, vue_exports.camelize)(ev))] = (...arg) => emit(ev, ...arg);
	});
	return result;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/useForwardExpose.js
function useForwardExpose() {
	const instance = (0, vue_exports.getCurrentInstance)();
	const currentRef = (0, vue_exports.ref)();
	const currentElement = (0, vue_exports.computed)(() => resolveCurrentElement());
	function resolveCurrentElement() {
		return currentRef.value && "$el" in currentRef.value && ["#text", "#comment"].includes(currentRef.value.$el.nodeName) ? currentRef.value.$el.nextElementSibling : unrefElement(currentRef);
	}
	const localExpose = Object.assign({}, instance.exposed);
	const ret = {};
	for (const key in instance.props) Object.defineProperty(ret, key, {
		enumerable: true,
		configurable: true,
		get: () => instance.props[key]
	});
	if (Object.keys(localExpose).length > 0) for (const key in localExpose) Object.defineProperty(ret, key, {
		enumerable: true,
		configurable: true,
		get: () => localExpose[key]
	});
	Object.defineProperty(ret, "$el", {
		enumerable: true,
		configurable: true,
		get: () => instance.vnode.el
	});
	instance.exposed = ret;
	function forwardRef(ref$1) {
		currentRef.value = ref$1;
		if (!ref$1) return;
		Object.defineProperty(ret, "$el", {
			enumerable: true,
			configurable: true,
			get: () => ref$1 instanceof Element ? ref$1 : ref$1.$el
		});
		if (!(ref$1 instanceof Element) && !Object.hasOwn(ref$1, "$el")) {
			const childExposed = ref$1.$.exposed;
			const merged = Object.assign({}, ret);
			for (const key in childExposed) Object.defineProperty(merged, key, {
				enumerable: true,
				configurable: true,
				get: () => childExposed[key]
			});
			instance.exposed = merged;
		}
	}
	return {
		forwardRef,
		currentRef,
		currentElement
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/useForwardProps.js
/**
* The `useForwardProps` function in TypeScript takes in a set of props and returns a computed value
* that combines default props with assigned props from the current instance.
* @param {T} props - The `props` parameter is an object that represents the props passed to a
* component.
* @returns computed value that combines the default props, preserved props, and assigned props.
*/
function useForwardProps$1(props) {
	const vm = (0, vue_exports.getCurrentInstance)();
	const defaultProps = Object.keys(vm?.type.props ?? {}).reduce((prev, curr) => {
		const defaultValue = (vm?.type.props[curr]).default;
		if (defaultValue !== void 0) prev[curr] = defaultValue;
		return prev;
	}, {});
	const refProps = (0, vue_exports.toRef)(props);
	return (0, vue_exports.computed)(() => {
		const preservedProps = {};
		const assignedProps = vm?.vnode.props ?? {};
		Object.keys(assignedProps).forEach((key) => {
			preservedProps[(0, vue_exports.camelize)(key)] = assignedProps[key];
		});
		return Object.keys({
			...defaultProps,
			...preservedProps
		}).reduce((prev, curr) => {
			if (refProps.value[curr] !== void 0) prev[curr] = refProps.value[curr];
			return prev;
		}, {});
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/shared/useStateMachine.js
/**
* The `useStateMachine` function is a TypeScript function that creates a state machine and returns the
* current state and a dispatch function to update the state based on events.
* @param initialState - The `initialState` parameter is the initial state of the state machine. It
* represents the starting point of the state machine's state.
* @param machine - The `machine` parameter is an object that represents a state machine. It should
* have keys that correspond to the possible states of the machine, and the values should be objects
* that represent the possible events and their corresponding next states.
* @returns The `useStateMachine` function returns an object with two properties: `state` and
* `dispatch`.
*/
function useStateMachine(initialState, machine) {
	const state = (0, vue_exports.ref)(initialState);
	function reducer(event) {
		return machine[state.value][event] ?? state.value;
	}
	const dispatch = (event) => {
		state.value = reducer(event);
	};
	return {
		state,
		dispatch
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Presence/usePresence.js
function usePresence(present, node) {
	const stylesRef = (0, vue_exports.ref)({});
	const prevAnimationNameRef = (0, vue_exports.ref)("none");
	const prevPresentRef = (0, vue_exports.ref)(present);
	const initialState = present.value ? "mounted" : "unmounted";
	let timeoutId;
	const ownerWindow = node.value?.ownerDocument.defaultView ?? defaultWindow;
	const { state, dispatch } = useStateMachine(initialState, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	(0, vue_exports.watch)(present, async (currentPresent, prevPresent) => {
		const hasPresentChanged = prevPresent !== currentPresent;
		await (0, vue_exports.nextTick)();
		if (hasPresentChanged) {
			const prevAnimationName = prevAnimationNameRef.value;
			const currentAnimationName = getAnimationName(node.value);
			if (currentPresent) {
				dispatch("MOUNT");
				if (currentAnimationName === "none");
			} else if (currentAnimationName === "none" || currentAnimationName === "undefined" || stylesRef.value?.display === "none") dispatch("UNMOUNT");
			else if (prevPresent && prevAnimationName !== currentAnimationName) dispatch("ANIMATION_OUT");
			else dispatch("UNMOUNT");
		}
	}, { immediate: true });
	/**
	* Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
	* event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
	* make sure we only trigger ANIMATION_END for the currently active animation.
	*/
	const handleAnimationEnd = (event) => {
		if (event.target !== node.value) return;
		const currentAnimationName = getAnimationName(node.value);
		const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
		const directionName = state.value === "mounted" ? "enter" : "leave";
		if (isCurrentAnimation) {
			`${directionName}`;
			dispatch("ANIMATION_END");
			if (!prevPresentRef.value) {
				const currentFillMode = node.value.style.animationFillMode;
				node.value.style.animationFillMode = "forwards";
				timeoutId = ownerWindow?.setTimeout(() => {
					if (node.value?.style.animationFillMode === "forwards") node.value.style.animationFillMode = currentFillMode;
				});
			}
		}
		if (currentAnimationName === "none") dispatch("ANIMATION_END");
	};
	const handleAnimationStart = (event) => {
		if (event.target === node.value) prevAnimationNameRef.value = getAnimationName(node.value);
	};
	(0, vue_exports.watch)(node, (newNode, oldNode) => {
		if (newNode) {
			stylesRef.value = getComputedStyle(newNode);
			newNode.addEventListener("animationstart", handleAnimationStart);
			newNode.addEventListener("animationcancel", handleAnimationEnd);
			newNode.addEventListener("animationend", handleAnimationEnd);
		} else {
			dispatch("ANIMATION_END");
			if (timeoutId !== void 0) ownerWindow?.clearTimeout(timeoutId);
			oldNode?.removeEventListener("animationstart", handleAnimationStart);
			oldNode?.removeEventListener("animationcancel", handleAnimationEnd);
			oldNode?.removeEventListener("animationend", handleAnimationEnd);
		}
	}, { immediate: true });
	(0, vue_exports.watch)(state, () => {
		const currentAnimationName = getAnimationName(node.value);
		prevAnimationNameRef.value = state.value === "mounted" ? currentAnimationName : "none";
	});
	return { isPresent: (0, vue_exports.computed)(() => ["mounted", "unmountSuspended"].includes(state.value)) };
}
function getAnimationName(node) {
	return node ? getComputedStyle(node).animationName || "none" : "none";
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Presence/Presence.js
var Presence_default = /*#__PURE__*/ (0, vue_exports.defineComponent)({
	name: "Presence",
	props: {
		present: {
			type: Boolean,
			required: true
		},
		forceMount: { type: Boolean }
	},
	slots: {},
	setup(props, { slots, expose }) {
		const { present, forceMount } = (0, vue_exports.toRefs)(props);
		const node = (0, vue_exports.ref)();
		const { isPresent } = usePresence(present, node);
		expose({ present: isPresent });
		let children = slots.default({ present: isPresent.value });
		children = renderSlotFragments(children || []);
		const instance = (0, vue_exports.getCurrentInstance)();
		if (children && children?.length > 1) {
			const componentName = instance?.parent?.type.name ? `<${instance.parent.type.name} />` : "component";
			throw new Error([
				`Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
				"",
				"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
				"You can apply a few solutions:",
				["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((line) => `  - ${line}`).join("\n")
			].join("\n"));
		}
		return () => {
			if (forceMount.value || present.value || isPresent.value) return (0, vue_exports.h)(slots.default({ present: isPresent.value })[0], { ref: (v) => {
				const el = unrefElement(v);
				if (typeof el?.hasAttribute === "undefined") return el;
				if (el?.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
				else node.value = el;
				return el;
			} });
			else return null;
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Primitive/Slot.js
var Slot = /*#__PURE__*/ (0, vue_exports.defineComponent)({
	name: "PrimitiveSlot",
	inheritAttrs: false,
	setup(_, { attrs, slots }) {
		return () => {
			if (!slots.default) return null;
			const children = renderSlotFragments(slots.default());
			const firstNonCommentChildrenIndex = children.findIndex((child) => child.type !== vue_exports.Comment);
			if (firstNonCommentChildrenIndex === -1) return children;
			const firstNonCommentChildren = children[firstNonCommentChildrenIndex];
			delete firstNonCommentChildren.props?.ref;
			const mergedProps = firstNonCommentChildren.props ? (0, vue_exports.mergeProps)(attrs, firstNonCommentChildren.props) : attrs;
			const cloned = (0, vue_exports.cloneVNode)({
				...firstNonCommentChildren,
				props: {}
			}, mergedProps);
			if (children.length === 1) return cloned;
			children[firstNonCommentChildrenIndex] = cloned;
			return children;
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Primitive/Primitive.js
var SELF_CLOSING_TAGS = [
	"area",
	"img",
	"input"
];
var Primitive = /*#__PURE__*/ (0, vue_exports.defineComponent)({
	name: "Primitive",
	inheritAttrs: false,
	props: {
		asChild: {
			type: Boolean,
			default: false
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(props, { attrs, slots }) {
		const asTag = props.asChild ? "template" : props.as;
		if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => (0, vue_exports.h)(asTag, attrs);
		if (asTag !== "template") return () => (0, vue_exports.h)(props.as, attrs, { default: slots.default });
		return () => (0, vue_exports.h)(Slot, attrs, { default: slots.default });
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function usePrimitiveElement() {
	const primitiveElement = (0, vue_exports.ref)();
	return {
		primitiveElement,
		currentElement: (0, vue_exports.computed)(() => ["#text", "#comment"].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement))
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/DismissableLayer/DismissableLayerBranch.js
var DismissableLayerBranch_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "DismissableLayerBranch",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef, currentElement } = useForwardExpose();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({ ref: (0, vue_exports.unref)(forwardRef) }, props), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/FocusScope/utils.js
/**
* Attempts focusing the first element in a list of candidates.
* Stops when focus has actually moved.
*/
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = getActiveElement();
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (getActiveElement() !== previouslyFocusedElement) return true;
	}
}
/**
* Returns a list of potential tabbable candidates.
*
* NOTE: This is only a close approximation. For example it doesn't take into account cases like when
* elements are not visible. This cannot be worked out easily by just reading a property, but rather
* necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
*
* See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
* Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
*/
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = (void 0).createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = getActiveElement();
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Teleport/Teleport.js
var Teleport_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "Teleport",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const configContext = injectConfigProviderContext({});
		const target = (0, vue_exports.computed)(() => props.to ?? configContext.teleportTo?.value ?? "body");
		const isMounted = useMounted();
		return (_ctx, _cache) => {
			return (0, vue_exports.unref)(isMounted) || _ctx.forceMount ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Teleport, {
				key: 0,
				to: target.value,
				disabled: _ctx.disabled,
				defer: _ctx.defer
			}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")], 8, [
				"to",
				"disabled",
				"defer"
			])) : (0, vue_exports.createCommentVNode)("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Collection/Collection.js
var ITEM_DATA_ATTR = "data-reka-collection-item";
function useCollection(options = {}) {
	const { key = "", isProvider = false } = options;
	const injectionKey = `${key}CollectionProvider`;
	let context;
	if (isProvider) {
		const itemMap = (0, vue_exports.ref)(/* @__PURE__ */ new Map());
		context = {
			collectionRef: (0, vue_exports.ref)(),
			itemMap
		};
		(0, vue_exports.provide)(injectionKey, context);
	} else context = (0, vue_exports.inject)(injectionKey);
	const getItem = (element, includeDisabledItem = false) => {
		if (!context.collectionRef.value) return void 0;
		const item = context.itemMap.value.get(element);
		return item && (includeDisabledItem || item.ref.dataset.disabled !== "") ? item : void 0;
	};
	const getItems = (includeDisabledItem = false) => {
		const collectionNode = context.collectionRef.value;
		if (!collectionNode) return [];
		const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
		const orderMap = new Map(orderedNodes.map((node, index) => [node, index]));
		const orderedItems = Array.from(context.itemMap.value.values()).sort((a, b) => (orderMap.get(a.ref) ?? -1) - (orderMap.get(b.ref) ?? -1));
		if (includeDisabledItem) return orderedItems;
		else return orderedItems.filter((i) => i.ref.dataset.disabled !== "");
	};
	const CollectionSlot = /*#__PURE__*/ (0, vue_exports.defineComponent)({
		name: "CollectionSlot",
		inheritAttrs: false,
		setup(_, { slots, attrs }) {
			const { primitiveElement, currentElement } = usePrimitiveElement();
			(0, vue_exports.watch)(currentElement, () => {
				context.collectionRef.value = currentElement.value;
			});
			return () => (0, vue_exports.h)(Slot, {
				ref: primitiveElement,
				...attrs
			}, slots);
		}
	});
	const CollectionItem = /*#__PURE__*/ (0, vue_exports.defineComponent)({
		name: "CollectionItem",
		inheritAttrs: false,
		props: { value: { validator: () => true } },
		setup(props, { slots, attrs }) {
			const { primitiveElement, currentElement } = usePrimitiveElement();
			(0, vue_exports.watchEffect)((cleanupFn) => {
				if (currentElement.value) {
					const key$1 = (0, vue_exports.markRaw)(currentElement.value);
					context.itemMap.value.set(key$1, {
						ref: currentElement.value,
						value: props.value
					});
					cleanupFn(() => context.itemMap.value.delete(key$1));
				}
			});
			return () => (0, vue_exports.h)(Slot, {
				...attrs,
				[ITEM_DATA_ATTR]: "",
				ref: primitiveElement
			}, slots);
		}
	});
	return {
		getItems,
		getItem,
		reactiveItems: (0, vue_exports.computed)(() => Array.from(context.itemMap.value.values())),
		itemMapSize: (0, vue_exports.computed)(() => context.itemMap.value.size),
		CollectionSlot,
		CollectionItem
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "VisuallyHidden",
	props: {
		feature: {
			type: String,
			required: false,
			default: "focusable"
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), {
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"aria-hidden": _ctx.feature === "focusable" || _ctx.feature === "fully-hidden" ? "true" : void 0,
				"data-hidden": _ctx.feature === "fully-hidden" ? "" : void 0,
				tabindex: _ctx.feature === "fully-hidden" ? "-1" : void 0,
				style: {
					position: "absolute",
					border: 0,
					width: "1px",
					height: "1px",
					padding: 0,
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					clipPath: "inset(50%)",
					whiteSpace: "nowrap",
					wordWrap: "normal",
					top: "-1px",
					left: "-1px"
				}
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"aria-hidden",
				"data-hidden",
				"tabindex"
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Progress/ProgressRoot.js
var DEFAULT_MAX = 100;
var [injectProgressRootContext, provideProgressRootContext] = /*#__PURE__*/ createContext("ProgressRoot");
var isNumber$1 = (v) => typeof v === "number";
function validateValue(value, max) {
	if (isNullish(value) || isNumber$1(value) && !Number.isNaN(value) && value <= max && value >= 0) return value;
	console.error(`Invalid prop \`value\` of value \`${value}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`);
	return null;
}
function validateMax(max) {
	if (isNumber$1(max) && !Number.isNaN(max) && max > 0) return max;
	console.error(`Invalid prop \`max\` of value \`${max}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`);
	return DEFAULT_MAX;
}
var ProgressRoot_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ProgressRoot",
	props: {
		modelValue: {
			type: [Number, null],
			required: false
		},
		max: {
			type: Number,
			required: false,
			default: DEFAULT_MAX
		},
		getValueLabel: {
			type: Function,
			required: false,
			default: (value, max) => isNumber$1(value) ? `${Math.round(value / max * DEFAULT_MAX)}%` : void 0
		},
		getValueText: {
			type: Function,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["update:modelValue", "update:max"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		useForwardExpose();
		const modelValue = useVModel(props, "modelValue", emit, { passive: props.modelValue === void 0 });
		const max = useVModel(props, "max", emit, { passive: props.max === void 0 });
		(0, vue_exports.watch)(() => modelValue.value, async (value) => {
			const correctedValue = validateValue(value, props.max);
			if (correctedValue !== value) {
				await (0, vue_exports.nextTick)();
				modelValue.value = correctedValue;
			}
		}, { immediate: true });
		(0, vue_exports.watch)(() => props.max, (newMax) => {
			const correctedMax = validateMax(props.max);
			if (correctedMax !== newMax) max.value = correctedMax;
		}, { immediate: true });
		const progressState = (0, vue_exports.computed)(() => {
			if (isNullish(modelValue.value)) return "indeterminate";
			if (modelValue.value === max.value) return "complete";
			return "loading";
		});
		provideProgressRootContext({
			modelValue,
			max,
			progressState
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), {
				"as-child": _ctx.asChild,
				as: _ctx.as,
				"aria-valuemax": (0, vue_exports.unref)(max),
				"aria-valuemin": 0,
				"aria-valuenow": isNumber$1((0, vue_exports.unref)(modelValue)) ? (0, vue_exports.unref)(modelValue) : void 0,
				"aria-valuetext": _ctx.getValueText?.((0, vue_exports.unref)(modelValue), (0, vue_exports.unref)(max)),
				"aria-label": _ctx.getValueLabel((0, vue_exports.unref)(modelValue), (0, vue_exports.unref)(max)),
				role: "progressbar",
				"data-state": progressState.value,
				"data-value": (0, vue_exports.unref)(modelValue) ?? void 0,
				"data-max": (0, vue_exports.unref)(max)
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { modelValue: (0, vue_exports.unref)(modelValue) })]),
				_: 3
			}, 8, [
				"as-child",
				"as",
				"aria-valuemax",
				"aria-valuenow",
				"aria-valuetext",
				"aria-label",
				"data-state",
				"data-value",
				"data-max"
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Progress/ProgressIndicator.js
var ProgressIndicator_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ProgressIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectProgressRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)(props, {
				"data-state": (0, vue_exports.unref)(rootContext).progressState.value,
				"data-value": (0, vue_exports.unref)(rootContext).modelValue?.value ?? void 0,
				"data-max": (0, vue_exports.unref)(rootContext).max.value
			}), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"data-state",
				"data-value",
				"data-max"
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastAnnounceExclude.js
var ToastAnnounceExclude_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastAnnounceExclude",
	props: {
		altText: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), {
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"data-reka-toast-announce-exclude": "",
				"data-reka-toast-announce-alt": _ctx.altText || void 0
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-reka-toast-announce-alt"
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastProvider.js
var [injectToastProviderContext, provideToastProviderContext] = /*#__PURE__*/ createContext("ToastProvider");
var ToastProvider_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	inheritAttrs: false,
	__name: "ToastProvider",
	props: {
		label: {
			type: String,
			required: false,
			default: "Notification"
		},
		duration: {
			type: Number,
			required: false,
			default: 5e3
		},
		disableSwipe: {
			type: Boolean,
			required: false
		},
		swipeDirection: {
			type: String,
			required: false,
			default: "right"
		},
		swipeThreshold: {
			type: Number,
			required: false,
			default: 50
		}
	},
	setup(__props) {
		const props = __props;
		const { label, duration, disableSwipe, swipeDirection, swipeThreshold } = (0, vue_exports.toRefs)(props);
		useCollection({ isProvider: true });
		const viewport = (0, vue_exports.ref)();
		const toastCount = (0, vue_exports.ref)(0);
		const isFocusedToastEscapeKeyDownRef = (0, vue_exports.ref)(false);
		const isClosePausedRef = (0, vue_exports.ref)(false);
		if (props.label && typeof props.label === "string" && !props.label.trim()) throw new Error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.");
		provideToastProviderContext({
			label,
			duration,
			disableSwipe,
			swipeDirection,
			swipeThreshold,
			toastCount,
			viewport,
			onViewportChange(el) {
				viewport.value = el;
			},
			onToastAdd() {
				toastCount.value++;
			},
			onToastRemove() {
				toastCount.value--;
			},
			isFocusedToastEscapeKeyDownRef,
			isClosePausedRef
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.renderSlot)(_ctx.$slots, "default");
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastAnnounce.js
var ToastAnnounce_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastAnnounce",
	setup(__props) {
		const providerContext = injectToastProviderContext();
		const isAnnounced = useTimeout(1e3);
		const renderAnnounceText = (0, vue_exports.ref)(false);
		return (_ctx, _cache) => {
			return (0, vue_exports.unref)(isAnnounced) || renderAnnounceText.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(VisuallyHidden_default), {
				key: 0,
				feature: "fully-hidden"
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(providerContext).label.value) + " ", 1), (0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			})) : (0, vue_exports.createCommentVNode)("v-if", true);
		};
	}
});
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
function handleAndDispatchCustomEvent(name, handler, detail) {
	const currentTarget = detail.originalEvent.currentTarget;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) currentTarget.addEventListener(name, handler, { once: true });
	currentTarget.dispatchEvent(event);
}
function isDeltaInDirection(delta, direction, threshold = 0) {
	const deltaX = Math.abs(delta.x);
	const deltaY = Math.abs(delta.y);
	const isDeltaX = deltaX > deltaY;
	if (direction === "left" || direction === "right") return isDeltaX && deltaX > threshold;
	else return !isDeltaX && deltaY > threshold;
}
function isHTMLElement(node) {
	return node.nodeType === node.ELEMENT_NODE;
}
function getAnnounceTextContent(container) {
	const textContent = [];
	Array.from(container.childNodes).forEach((node) => {
		if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
		if (isHTMLElement(node)) {
			const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
			const isExcluded = node.dataset.rekaToastAnnounceExclude === "";
			if (!isHidden) if (isExcluded) {
				const altText = node.dataset.rekaToastAnnounceAlt;
				if (altText) textContent.push(altText);
			} else textContent.push(...getAnnounceTextContent(node));
		}
	});
	return textContent;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastRootImpl.js
var [injectToastRootContext, provideToastRootContext] = /*#__PURE__*/ createContext("ToastRoot");
var ToastRootImpl_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	inheritAttrs: false,
	__name: "ToastRootImpl",
	props: {
		type: {
			type: String,
			required: false
		},
		open: {
			type: Boolean,
			required: false,
			default: false
		},
		duration: {
			type: Number,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "li"
		}
	},
	emits: [
		"close",
		"escapeKeyDown",
		"pause",
		"resume",
		"swipeStart",
		"swipeMove",
		"swipeCancel",
		"swipeEnd"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const { CollectionItem } = useCollection();
		const providerContext = injectToastProviderContext();
		const pointerStartRef = (0, vue_exports.ref)(null);
		const swipeDeltaRef = (0, vue_exports.ref)(null);
		const duration = (0, vue_exports.computed)(() => typeof props.duration === "number" ? props.duration : providerContext.duration.value);
		const closeTimerStartTimeRef = (0, vue_exports.ref)(0);
		const closeTimerRemainingTimeRef = (0, vue_exports.ref)(duration.value);
		const closeTimerRef = (0, vue_exports.ref)(0);
		const remainingTime = (0, vue_exports.ref)(duration.value);
		const remainingRaf = useRafFn(() => {
			const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
			remainingTime.value = Math.max(closeTimerRemainingTimeRef.value - elapsedTime, 0);
		}, { fpsLimit: 60 });
		function handleClose(event) {
			const isNonPointerEvent = event?.pointerType === "";
			if (currentElement.value?.contains(getActiveElement()) && isNonPointerEvent) providerContext.viewport.value?.focus();
			if (isNonPointerEvent) providerContext.isClosePausedRef.value = false;
			emits("close");
		}
		const announceTextContent = (0, vue_exports.computed)(() => currentElement.value ? getAnnounceTextContent(currentElement.value) : null);
		if (props.type && !["foreground", "background"].includes(props.type)) throw new Error("Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.");
		(0, vue_exports.watchEffect)((cleanupFn) => {
			const viewport = providerContext.viewport.value;
			if (viewport) {
				const handleResume = () => {
					closeTimerRemainingTimeRef.value;
					remainingRaf.resume();
					emits("resume");
				};
				const handlePause = () => {
					const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
					closeTimerRemainingTimeRef.value = closeTimerRemainingTimeRef.value - elapsedTime;
					(void 0).clearTimeout(closeTimerRef.value);
					remainingRaf.pause();
					emits("pause");
				};
				viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
				viewport.addEventListener(VIEWPORT_RESUME, handleResume);
				cleanupFn(() => {
					viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
					viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
				});
			}
		});
		(0, vue_exports.watch)(() => [props.open, duration.value], () => {
			closeTimerRemainingTimeRef.value = duration.value;
			if (props.open && !providerContext.isClosePausedRef.value) duration.value;
		}, { immediate: true });
		onKeyStroke("Escape", (event) => {
			emits("escapeKeyDown", event);
			if (!event.defaultPrevented) {
				providerContext.isFocusedToastEscapeKeyDownRef.value = true;
				handleClose();
			}
		});
		provideToastRootContext({ onClose: handleClose });
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createElementBlock)(vue_exports.Fragment, null, [announceTextContent.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(ToastAnnounce_default, {
				key: 0,
				role: "alert",
				"aria-live": _ctx.type === "foreground" ? "assertive" : "polite"
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createCommentVNode)("\n      Render each chunk as its own text node so screen readers get the\n      natural pause break between nodes (see comment in utils.ts).\n      Interpolating the array directly with `{{ announceTextContent }}`\n      would route through Vue's `toDisplayString`, which JSON-stringifies\n      arrays — the live region would then announce literal `[`, quotes\n      and commas instead of the toast title and description.\n    "), ((0, vue_exports.openBlock)(true), (0, vue_exports.createElementBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(announceTextContent.value, (text, i) => {
					return (0, vue_exports.openBlock)(), (0, vue_exports.createElementBlock)(vue_exports.Fragment, { key: i }, [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(text), 1)], 64);
				}), 128))]),
				_: 1
			}, 8, ["aria-live"])) : (0, vue_exports.createCommentVNode)("v-if", true), (0, vue_exports.unref)(providerContext).viewport.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Teleport, {
				key: 1,
				to: (0, vue_exports.unref)(providerContext).viewport.value
			}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(CollectionItem), null, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
					ref: (0, vue_exports.unref)(forwardRef),
					tabindex: "0"
				}, _ctx.$attrs, {
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"data-state": _ctx.open ? "open" : "closed",
					"data-swipe-direction": (0, vue_exports.unref)(providerContext).swipeDirection.value,
					style: (0, vue_exports.unref)(providerContext).disableSwipe.value ? void 0 : {
						userSelect: "none",
						touchAction: "none"
					},
					onPointerdown: _cache[0] || (_cache[0] = (0, vue_exports.withModifiers)((event) => {
						if ((0, vue_exports.unref)(providerContext).disableSwipe.value) return;
						pointerStartRef.value = {
							x: event.clientX,
							y: event.clientY
						};
					}, ["left"])),
					onPointermove: _cache[1] || (_cache[1] = (event) => {
						if ((0, vue_exports.unref)(providerContext).disableSwipe.value || !pointerStartRef.value) return;
						const x = event.clientX - pointerStartRef.value.x;
						const y = event.clientY - pointerStartRef.value.y;
						const hasSwipeMoveStarted = Boolean(swipeDeltaRef.value);
						const isHorizontalSwipe = ["left", "right"].includes((0, vue_exports.unref)(providerContext).swipeDirection.value);
						const clamp = ["left", "up"].includes((0, vue_exports.unref)(providerContext).swipeDirection.value) ? Math.min : Math.max;
						const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
						const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
						const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
						const delta = {
							x: clampedX,
							y: clampedY
						};
						const eventDetail = {
							originalEvent: event,
							delta
						};
						if (hasSwipeMoveStarted) {
							swipeDeltaRef.value = delta;
							(0, vue_exports.unref)(handleAndDispatchCustomEvent)((0, vue_exports.unref)("toast.swipeMove"), (ev) => emits("swipeMove", ev), eventDetail);
						} else if ((0, vue_exports.unref)(isDeltaInDirection)(delta, (0, vue_exports.unref)(providerContext).swipeDirection.value, moveStartBuffer)) {
							swipeDeltaRef.value = delta;
							(0, vue_exports.unref)(handleAndDispatchCustomEvent)((0, vue_exports.unref)("toast.swipeStart"), (ev) => emits("swipeStart", ev), eventDetail);
							event.target.setPointerCapture(event.pointerId);
						} else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) pointerStartRef.value = null;
					}),
					onPointerup: _cache[2] || (_cache[2] = (event) => {
						if ((0, vue_exports.unref)(providerContext).disableSwipe.value) return;
						const delta = swipeDeltaRef.value;
						const target = event.target;
						if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
						swipeDeltaRef.value = null;
						pointerStartRef.value = null;
						if (delta) {
							const toast = event.currentTarget;
							const eventDetail = {
								originalEvent: event,
								delta
							};
							if ((0, vue_exports.unref)(isDeltaInDirection)(delta, (0, vue_exports.unref)(providerContext).swipeDirection.value, (0, vue_exports.unref)(providerContext).swipeThreshold.value)) (0, vue_exports.unref)(handleAndDispatchCustomEvent)((0, vue_exports.unref)("toast.swipeEnd"), (ev) => emits("swipeEnd", ev), eventDetail);
							else (0, vue_exports.unref)(handleAndDispatchCustomEvent)((0, vue_exports.unref)("toast.swipeCancel"), (ev) => emits("swipeCancel", ev), eventDetail);
							toast?.addEventListener("click", (event$1) => event$1.preventDefault(), { once: true });
						}
					})
				}), {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
						remaining: remainingTime.value,
						duration: duration.value
					})]),
					_: 3
				}, 16, [
					"as",
					"as-child",
					"data-state",
					"data-swipe-direction",
					"style"
				])]),
				_: 3
			})], 8, ["to"])) : (0, vue_exports.createCommentVNode)("v-if", true)], 64);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastClose.js
var ToastClose_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastClose",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectToastRootContext();
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(ToastAnnounceExclude_default, { "as-child": "" }, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)(props, {
					ref: (0, vue_exports.unref)(forwardRef),
					type: _ctx.as === "button" ? "button" : void 0,
					onClick: (0, vue_exports.unref)(rootContext).onClose
				}), {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["type", "onClick"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastAction.js
var ToastAction_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastAction",
	props: {
		altText: {
			type: String,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		if (!__props.altText) throw new Error("Missing prop `altText` expected on `ToastAction`");
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return _ctx.altText ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(ToastAnnounceExclude_default, {
				key: 0,
				"alt-text": _ctx.altText,
				"as-child": ""
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(ToastClose_default, {
					ref: (0, vue_exports.unref)(forwardRef),
					as: _ctx.as,
					"as-child": _ctx.asChild
				}, {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["as", "as-child"])]),
				_: 3
			}, 8, ["alt-text"])) : (0, vue_exports.createCommentVNode)("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastDescription.js
var ToastDescription_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastDescription",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), (0, vue_exports.normalizeProps)((0, vue_exports.guardReactiveProps)(props)), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastPortal.js
var ToastPortal_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Teleport_default), (0, vue_exports.normalizeProps)((0, vue_exports.guardReactiveProps)(props)), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastRoot.js
var ToastRoot_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false,
			default: true
		},
		forceMount: {
			type: Boolean,
			required: false
		},
		type: {
			type: String,
			required: false,
			default: "foreground"
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		duration: {
			type: Number,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "li"
		}
	},
	emits: [
		"escapeKeyDown",
		"pause",
		"resume",
		"swipeStart",
		"swipeMove",
		"swipeCancel",
		"swipeEnd",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef } = useForwardExpose();
		const open = useVModel(props, "open", emits, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Presence_default), { present: _ctx.forceMount || (0, vue_exports.unref)(open) }, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(ToastRootImpl_default, (0, vue_exports.mergeProps)({
					ref: (0, vue_exports.unref)(forwardRef),
					open: (0, vue_exports.unref)(open),
					type: _ctx.type,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					duration: _ctx.duration
				}, _ctx.$attrs, {
					onClose: _cache[0] || (_cache[0] = ($event) => open.value = false),
					onPause: _cache[1] || (_cache[1] = ($event) => emits("pause")),
					onResume: _cache[2] || (_cache[2] = ($event) => emits("resume")),
					onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
					onSwipeStart: _cache[4] || (_cache[4] = (event) => {
						emits("swipeStart", event);
						if (!event.defaultPrevented) event.currentTarget.setAttribute("data-swipe", "start");
					}),
					onSwipeMove: _cache[5] || (_cache[5] = (event) => {
						emits("swipeMove", event);
						if (!event.defaultPrevented) {
							const { x, y } = event.detail.delta;
							const target = event.currentTarget;
							target.setAttribute("data-swipe", "move");
							target.style.setProperty("--reka-toast-swipe-move-x", `${x}px`);
							target.style.setProperty("--reka-toast-swipe-move-y", `${y}px`);
						}
					}),
					onSwipeCancel: _cache[6] || (_cache[6] = (event) => {
						emits("swipeCancel", event);
						if (!event.defaultPrevented) {
							const target = event.currentTarget;
							target.setAttribute("data-swipe", "cancel");
							target.style.removeProperty("--reka-toast-swipe-move-x");
							target.style.removeProperty("--reka-toast-swipe-move-y");
							target.style.removeProperty("--reka-toast-swipe-end-x");
							target.style.removeProperty("--reka-toast-swipe-end-y");
						}
					}),
					onSwipeEnd: _cache[7] || (_cache[7] = (event) => {
						emits("swipeEnd", event);
						if (!event.defaultPrevented) {
							const { x, y } = event.detail.delta;
							const target = event.currentTarget;
							target.setAttribute("data-swipe", "end");
							target.style.removeProperty("--reka-toast-swipe-move-x");
							target.style.removeProperty("--reka-toast-swipe-move-y");
							target.style.setProperty("--reka-toast-swipe-end-x", `${x}px`);
							target.style.setProperty("--reka-toast-swipe-end-y", `${y}px`);
							open.value = false;
						}
					})
				}), {
					default: (0, vue_exports.withCtx)(({ remaining, duration: _duration }) => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
						remaining,
						duration: _duration,
						open: (0, vue_exports.unref)(open)
					})]),
					_: 3
				}, 16, [
					"open",
					"type",
					"as",
					"as-child",
					"duration"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastTitle.js
var ToastTitle_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "ToastTitle",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), (0, vue_exports.normalizeProps)((0, vue_exports.guardReactiveProps)(props)), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/FocusProxy.js
var FocusProxy_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "FocusProxy",
	emits: ["focusFromOutsideViewport"],
	setup(__props, { emit: __emit }) {
		const emits = __emit;
		const providerContext = injectToastProviderContext();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(VisuallyHidden_default), {
				tabindex: "0",
				style: { "position": "fixed" },
				onFocus: _cache[0] || (_cache[0] = (event) => {
					const prevFocusedElement = event.relatedTarget;
					if (!(0, vue_exports.unref)(providerContext).viewport.value?.contains(prevFocusedElement)) emits("focusFromOutsideViewport");
				})
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Toast/ToastViewport.js
var ToastViewport_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	inheritAttrs: false,
	__name: "ToastViewport",
	props: {
		hotkey: {
			type: Array,
			required: false,
			default: () => ["F8"]
		},
		label: {
			type: [String, Function],
			required: false,
			default: "Notifications ({hotkey})"
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "ol"
		}
	},
	setup(__props) {
		const { hotkey, label } = (0, vue_exports.toRefs)(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const { CollectionSlot, getItems } = useCollection();
		const providerContext = injectToastProviderContext();
		const hasToasts = (0, vue_exports.computed)(() => providerContext.toastCount.value > 0);
		const headFocusProxyRef = (0, vue_exports.ref)();
		const tailFocusProxyRef = (0, vue_exports.ref)();
		const KEY_RE = /Key/g;
		const DIGIT_RE = /Digit/g;
		const hotkeyMessage = (0, vue_exports.computed)(() => hotkey.value.join("+").replace(KEY_RE, "").replace(DIGIT_RE, ""));
		onKeyStroke(hotkey.value, () => {
			currentElement.value.focus();
		});
		(0, vue_exports.watchEffect)((cleanupFn) => {
			const viewport = currentElement.value;
			if (hasToasts.value && viewport) {
				const handlePause = () => {
					if (!providerContext.isClosePausedRef.value) {
						const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
						viewport.dispatchEvent(pauseEvent);
						providerContext.isClosePausedRef.value = true;
					}
				};
				const handleResume = () => {
					if (providerContext.isClosePausedRef.value) {
						const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
						viewport.dispatchEvent(resumeEvent);
						providerContext.isClosePausedRef.value = false;
					}
				};
				const handleFocusOutResume = (event) => {
					if (!viewport.contains(event.relatedTarget)) handleResume();
				};
				const handlePointerLeaveResume = () => {
					if (!viewport.contains(getActiveElement())) handleResume();
				};
				const handleKeyDown = (event) => {
					const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
					if (event.key === "Tab" && !isMetaKey) {
						const focusedElement = getActiveElement();
						const isTabbingBackwards = event.shiftKey;
						if (event.target === viewport && isTabbingBackwards) {
							headFocusProxyRef.value?.focus();
							return;
						}
						const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection: isTabbingBackwards ? "backwards" : "forwards" });
						const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
						if (focusFirst(sortedCandidates.slice(index + 1))) event.preventDefault();
						else isTabbingBackwards ? headFocusProxyRef.value?.focus() : tailFocusProxyRef.value?.focus();
					}
				};
				viewport.addEventListener("focusin", handlePause);
				viewport.addEventListener("focusout", handleFocusOutResume);
				viewport.addEventListener("pointermove", handlePause);
				viewport.addEventListener("pointerleave", handlePointerLeaveResume);
				viewport.addEventListener("keydown", handleKeyDown);
				(void 0).addEventListener("blur", handlePause);
				(void 0).addEventListener("focus", handleResume);
				cleanupFn(() => {
					viewport.removeEventListener("focusin", handlePause);
					viewport.removeEventListener("focusout", handleFocusOutResume);
					viewport.removeEventListener("pointermove", handlePause);
					viewport.removeEventListener("pointerleave", handlePointerLeaveResume);
					viewport.removeEventListener("keydown", handleKeyDown);
					(void 0).removeEventListener("blur", handlePause);
					(void 0).removeEventListener("focus", handleResume);
				});
			}
		});
		function getSortedTabbableCandidates({ tabbingDirection }) {
			const tabbableCandidates = getItems().map((i) => i.ref).map((toastNode) => {
				const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
				return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
			});
			return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
		}
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(DismissableLayerBranch_default), {
				role: "region",
				"aria-label": typeof (0, vue_exports.unref)(label) === "string" ? (0, vue_exports.unref)(label).replace("{hotkey}", hotkeyMessage.value) : (0, vue_exports.unref)(label)(hotkeyMessage.value),
				tabindex: "-1",
				style: (0, vue_exports.normalizeStyle)({ pointerEvents: hasToasts.value ? void 0 : "none" })
			}, {
				default: (0, vue_exports.withCtx)(() => [
					hasToasts.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(FocusProxy_default, {
						key: 0,
						ref: (node) => {
							if (!node) return void 0;
							headFocusProxyRef.value = (0, vue_exports.unref)(unrefElement)(node);
						},
						onFocusFromOutsideViewport: _cache[0] || (_cache[0] = () => {
							const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "forwards" });
							(0, vue_exports.unref)(focusFirst)(tabbableCandidates);
						})
					}, null, 512)) : (0, vue_exports.createCommentVNode)("v-if", true),
					(0, vue_exports.createVNode)((0, vue_exports.unref)(CollectionSlot), null, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
							ref: (0, vue_exports.unref)(forwardRef),
							tabindex: "-1",
							as: _ctx.as,
							"as-child": _ctx.asChild
						}, _ctx.$attrs), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
							_: 3
						}, 16, ["as", "as-child"])]),
						_: 3
					}),
					hasToasts.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(FocusProxy_default, {
						key: 1,
						ref: (node) => {
							if (!node) return void 0;
							tailFocusProxyRef.value = (0, vue_exports.unref)(unrefElement)(node);
						},
						onFocusFromOutsideViewport: _cache[1] || (_cache[1] = () => {
							const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "backwards" });
							(0, vue_exports.unref)(focusFirst)(tabbableCandidates);
						})
					}, null, 512)) : (0, vue_exports.createCommentVNode)("v-if", true)
				]),
				_: 3
			}, 8, ["aria-label", "style"]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.5_vue@3.5.43_typescript@5.7.3_/node_modules/reka-ui/dist/Tooltip/TooltipProvider.js
var [injectTooltipProviderContext, provideTooltipProviderContext] = /*#__PURE__*/ createContext("TooltipProvider");
var TooltipProvider_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	inheritAttrs: false,
	__name: "TooltipProvider",
	props: {
		delayDuration: {
			type: Number,
			required: false,
			default: 700
		},
		skipDelayDuration: {
			type: Number,
			required: false,
			default: 300
		},
		disableHoverableContent: {
			type: Boolean,
			required: false,
			default: false
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false,
			default: false
		},
		content: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const { delayDuration, skipDelayDuration, disableHoverableContent, disableClosingTrigger, ignoreNonKeyboardFocus, disabled, content } = (0, vue_exports.toRefs)(__props);
		useForwardExpose();
		const isOpenDelayed = (0, vue_exports.ref)(true);
		const isPointerInTransitRef = (0, vue_exports.ref)(false);
		const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
			isOpenDelayed.value = true;
		}, skipDelayDuration, { immediate: false });
		provideTooltipProviderContext({
			isOpenDelayed,
			delayDuration,
			onOpen() {
				clearTimer();
				isOpenDelayed.value = false;
			},
			onClose() {
				startTimer();
			},
			isPointerInTransitRef,
			disableHoverableContent,
			disableClosingTrigger,
			disabled,
			ignoreNonKeyboardFocus,
			content
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.renderSlot)(_ctx.$slots, "default");
		};
	}
});
//#endregion
//#region node_modules/.pnpm/ohash@2.0.12/node_modules/ohash/dist/_chunks/is-equal.mjs
function serialize(input) {
	if (typeof input === "string") return `'${input}'`;
	return new Serializer().serialize(input);
}
var asciiOrder = " _-,;:!?.'\"()[]{}@*/\\&#%`^+<=>|~$0123456789abcdefghijklmnopqrstuvwxyz";
var asciiWeights = /*@__PURE__*/ (function() {
	const weights = /* @__PURE__ */ new Uint8Array(128);
	for (let i = 0; i < 69; i++) weights[asciiOrder.charCodeAt(i)] = i + 1;
	for (let code = 65; code <= 90; code++) weights[code] = weights[code + 32];
	return weights;
})();
function compareStrings(a, b) {
	if (a === b) return 0;
	const length = Math.min(a.length, b.length);
	let tieBreaker = 0;
	for (let i = 0; i < length; i++) {
		const codeA = a.charCodeAt(i);
		const codeB = b.charCodeAt(i);
		if (codeA === codeB) continue;
		const weightA = codeA < 128 && asciiWeights[codeA] ? asciiWeights[codeA] : codeA + 128;
		const weightB = codeB < 128 && asciiWeights[codeB] ? asciiWeights[codeB] : codeB + 128;
		if (weightA !== weightB) return weightA < weightB ? -1 : 1;
		if (tieBreaker === 0) tieBreaker = codeA > codeB ? -1 : 1;
	}
	if (a.length !== b.length) return a.length < b.length ? -1 : 1;
	return tieBreaker;
}
var Serializer = /*@__PURE__*/ (function() {
	class Serializer {
		#context = /* @__PURE__ */ new Map();
		compare(a, b) {
			const typeA = typeof a;
			const typeB = typeof b;
			if (typeA === "string" && typeB === "string") return compareStrings(a, b);
			if (typeA === "number" && typeB === "number") return a - b;
			return compareStrings(this.serialize(a, true), this.serialize(b, true));
		}
		serialize(value, noQuotes) {
			if (value === null) return "null";
			switch (typeof value) {
				case "string": return noQuotes ? value : `'${value}'`;
				case "bigint": return `${value}n`;
				case "object": return this.$object(value);
				case "function": return this.$function(value);
			}
			return String(value);
		}
		serializeObject(object) {
			const objString = Object.prototype.toString.call(object);
			if (objString !== "[object Object]") return this.serializeBuiltInType(objString.length < 10 ? `unknown:${objString}` : objString.slice(8, -1), object);
			const constructor = object.constructor;
			const objName = constructor === Object || constructor === void 0 ? "" : constructor.name;
			if (objName !== "" && globalThis[objName] === constructor) return this.serializeBuiltInType(objName, object);
			if ("toJSON" in object && typeof object.toJSON === "function") {
				const json = object.toJSON();
				return objName + (json !== null && typeof json === "object" ? this.$object(json) : `(${this.serialize(json)})`);
			}
			const keys = Object.keys(object).sort(compareStrings);
			let content = `${objName}{`;
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				content += `${key}:${this.serialize(object[key])}`;
				if (i < keys.length - 1) content += ",";
			}
			return content + "}";
		}
		serializeBuiltInType(type, object) {
			const handler = this["$" + type];
			if (handler) return handler.call(this, object);
			if (typeof object.entries === "function") return this.serializeObjectEntries(type, object.entries());
			throw new Error(`Cannot serialize ${type}`);
		}
		serializeObjectEntries(type, entries) {
			const sortedEntries = Array.from(entries).sort((a, b) => this.compare(a[0], b[0]));
			let content = `${type}{`;
			for (let i = 0; i < sortedEntries.length; i++) {
				const [key, value] = sortedEntries[i];
				content += `${this.serialize(key, true)}:${this.serialize(value)}`;
				if (i < sortedEntries.length - 1) content += ",";
			}
			return content + "}";
		}
		$object(object) {
			let content = this.#context.get(object);
			if (content === void 0) {
				this.#context.set(object, `#${this.#context.size}`);
				content = this.serializeObject(object);
				this.#context.set(object, content);
			}
			return content;
		}
		$function(fn) {
			const fnStr = Function.prototype.toString.call(fn);
			if (fnStr.slice(-15) === "[native code] }") return `${fn.name || ""}()[native]`;
			return `${fn.name}(${fn.length})${fnStr.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(arr) {
			let content = "[";
			for (let i = 0; i < arr.length; i++) {
				content += this.serialize(arr[i]);
				if (i < arr.length - 1) content += ",";
			}
			return content + "]";
		}
		$Date(date) {
			try {
				return `Date(${date.toISOString()})`;
			} catch {
				return `Date(null)`;
			}
		}
		$ArrayBuffer(arr) {
			return `ArrayBuffer[${new Uint8Array(arr).join(",")}]`;
		}
		$Set(set) {
			return `Set${this.$Array(Array.from(set).sort((a, b) => this.compare(a, b)))}`;
		}
		$Map(map) {
			return this.serializeObjectEntries("Map", map.entries());
		}
	}
	for (const type of [
		"Error",
		"RegExp",
		"URL"
	]) Serializer.prototype["$" + type] = function(val) {
		return `${type}(${val})`;
	};
	for (const type of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) Serializer.prototype["$" + type] = function(arr) {
		return `${type}[${arr.join(",")}]`;
	};
	for (const type of ["BigInt64Array", "BigUint64Array"]) Serializer.prototype["$" + type] = function(arr) {
		return `${type}[${arr.join("n,")}${arr.length > 0 ? "n" : ""}]`;
	};
	return Serializer;
})();
function isEqual$2(object1, object2) {
	if (object1 === object2) return true;
	if (serialize(object1) === serialize(object2)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/ohash@2.0.12/node_modules/ohash/dist/utils/index.mjs
var PROTO_KEY = "__proto__";
function diff(obj1, obj2) {
	const diffs = [];
	_diff(obj1, obj2, "", diffs);
	return diffs;
}
function _diff(v1, v2, key, out) {
	if (v1 === v2) return;
	const leaf1 = v1 === null || typeof v1 !== "object";
	const leaf2 = v2 === null || typeof v2 !== "object";
	if (!leaf1 && !leaf2) {
		const entries1 = _entries(v1);
		const entries2 = _entries(v2);
		for (const [k, child1] of entries1) {
			const childKey = key ? `${key}.${k}` : k;
			if (entries2.has(k)) _diff(child1, entries2.get(k), childKey, out);
			else out.push(new DiffEntry(childKey, "removed", void 0, _toHashedObject(child1, childKey)));
		}
		for (const [k, child2] of entries2) {
			if (entries1.has(k)) continue;
			const childKey = key ? `${key}.${k}` : k;
			out.push(new DiffEntry(childKey, "added", _toHashedObject(child2, childKey)));
		}
		return;
	}
	if (_hasKeys(v1, leaf1) || _hasKeys(v2, leaf2)) return;
	const node1 = _emptyOrLeafNode(v1, key, leaf1);
	const node2 = _emptyOrLeafNode(v2, key, leaf2);
	if (node1.hash !== node2.hash) out.push(new DiffEntry(key, "changed", node2, node1));
}
function _entries(value) {
	const entries = /* @__PURE__ */ new Map();
	for (const key in value) if (key !== PROTO_KEY) entries.set(key, value[key]);
	return entries;
}
function _hasKeys(value, isLeaf) {
	if (isLeaf) return false;
	for (const key in value) if (key !== PROTO_KEY) return true;
	return false;
}
function _emptyOrLeafNode(value, key, isLeaf) {
	return isLeaf ? new DiffHashedObject(key, value, _leafHash(value)) : new DiffHashedObject(key, value, "{}", Object.create(null));
}
function _toHashedObject(obj, key = "") {
	if (obj === null || typeof obj !== "object") return new DiffHashedObject(key, obj, _leafHash(obj));
	const props = Object.create(null);
	const hashes = [];
	for (const _key in obj) {
		if (_key === PROTO_KEY) continue;
		const child = _toHashedObject(obj[_key], key ? `${key}.${_key}` : _key);
		props[_key] = child;
		hashes.push(child.hash);
	}
	return new DiffHashedObject(key, obj, `{${hashes.join(":")}}`, props);
}
function _leafHash(value) {
	switch (typeof value) {
		case "string": return `'${value}'`;
		case "number":
		case "boolean": return "" + value;
		case "bigint": return `${value}n`;
		default: return serialize(value);
	}
}
var DiffEntry = class {
	key;
	type;
	newValue;
	oldValue;
	constructor(key, type, newValue, oldValue) {
		this.key = key;
		this.type = type;
		this.newValue = newValue;
		this.oldValue = oldValue;
	}
	toString() {
		return this.toJSON();
	}
	toJSON() {
		switch (this.type) {
			case "added": return `Added   \`${this.key}\``;
			case "removed": return `Removed \`${this.key}\``;
			case "changed": return `Changed \`${this.key}\` from \`${this.oldValue?.toString() || "-"}\` to \`${this.newValue?.toString()}\``;
		}
	}
};
var DiffHashedObject = class {
	key;
	value;
	hash;
	props;
	constructor(key, value, hash, props) {
		this.key = key;
		this.value = value;
		this.hash = hash;
		this.props = props;
	}
	toString() {
		if (this.props) return `{${Object.keys(this.props).join(",")}}`;
		else return JSON.stringify(this.value);
	}
	toJSON() {
		const k = this.key || ".";
		if (this.props) return `${k}({${Object.keys(this.props).join(",")}})`;
		return `${k}(${this.value})`;
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/utils/index.js
function omit(data, keys) {
	const result = { ...data };
	for (const key of keys) delete result[key];
	return result;
}
function get(object, path, defaultValue) {
	const keys = typeof path === "string" ? path.split(".") : path;
	let result = object;
	for (const key of keys) {
		if (result === void 0 || result === null) return defaultValue;
		result = result[key];
	}
	return result !== void 0 ? result : defaultValue;
}
function mergeClasses(appConfigClass, propClass) {
	if (!appConfigClass && !propClass) return "";
	return [...Array.isArray(appConfigClass) ? appConfigClass : [appConfigClass], propClass].filter(Boolean);
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/utils/locale.js
function buildTranslator(locale) {
	return (path, option) => translate(path, option, (0, vue_exports.unref)(locale));
}
function translate(path, option, locale) {
	return get(locale, `messages.${path}`, path).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`);
}
function buildLocaleContext(locale) {
	return {
		lang: (0, vue_exports.computed)(() => (0, vue_exports.unref)(locale).name),
		code: (0, vue_exports.computed)(() => (0, vue_exports.unref)(locale).code),
		dir: (0, vue_exports.computed)(() => (0, vue_exports.unref)(locale).dir),
		locale: (0, vue_exports.isRef)(locale) ? locale : (0, vue_exports.ref)(locale),
		t: buildTranslator(locale)
	};
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/defineLocale.js
// @__NO_SIDE_EFFECTS__
function defineLocale(options) {
	return defu$1(options, { dir: "ltr" });
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/locale/en.js
var en_default = /* @__PURE__ */ defineLocale({
	name: "English",
	code: "en",
	messages: {
		alert: { close: "Close" },
		authForm: {
			hidePassword: "Hide password",
			showPassword: "Show password",
			submit: "Continue"
		},
		banner: { close: "Close" },
		calendar: {
			nextMonth: "Next month",
			nextYear: "Next year",
			prevMonth: "Previous month",
			prevYear: "Previous year"
		},
		carousel: {
			dots: "Choose slide to display",
			goto: "Go to slide {slide}",
			next: "Next",
			prev: "Prev"
		},
		chatPrompt: { placeholder: "Type your message here…" },
		chatPromptSubmit: { label: "Send prompt" },
		colorMode: {
			dark: "Dark",
			light: "Light",
			switchToDark: "Switch to dark mode",
			switchToLight: "Switch to light mode",
			system: "System"
		},
		commandPalette: {
			back: "Back",
			close: "Close",
			noData: "No data",
			noMatch: "No matching data",
			placeholder: "Type a command or search…"
		},
		contentSearch: {
			links: "Links",
			search: "Results",
			theme: "Theme"
		},
		contentSearchButton: { label: "Search…" },
		contentToc: { title: "On this page" },
		dropdownMenu: {
			noMatch: "No matching data",
			search: "Search…"
		},
		dashboardSearch: { theme: "Theme" },
		dashboardSearchButton: { label: "Search…" },
		dashboardSidebarCollapse: {
			collapse: "Collapse sidebar",
			expand: "Expand sidebar"
		},
		dashboardSidebarToggle: {
			close: "Close sidebar",
			open: "Open sidebar"
		},
		drawer: { close: "Close" },
		error: { clear: "Back to home" },
		fileUpload: { removeFile: "Remove {filename}" },
		header: {
			close: "Close menu",
			open: "Open menu"
		},
		inputMenu: {
			create: "Create \"{label}\"",
			noData: "No data",
			noMatch: "No matching data"
		},
		inputNumber: {
			decrement: "Decrement",
			increment: "Increment"
		},
		listbox: {
			noData: "No data",
			noMatch: "No matching data",
			search: "Search…"
		},
		modal: { close: "Close" },
		pricingTable: { caption: "Pricing plan comparison" },
		prose: {
			codeCollapse: {
				closeText: "Collapse",
				name: "code",
				openText: "Expand"
			},
			collapsible: {
				closeText: "Hide",
				name: "properties",
				openText: "Show"
			},
			pre: { copy: "Copy code to clipboard" },
			prompt: {
				copy: "Copy prompt",
				openIn: "Open in {name}"
			}
		},
		chatReasoning: {
			thinking: "Thinking…",
			thought: "Thought",
			thoughtFor: "Thought for {duration}"
		},
		sidebar: {
			close: "Close",
			toggle: "Toggle"
		},
		selectMenu: {
			create: "Create \"{label}\"",
			noData: "No data",
			noMatch: "No matching data",
			search: "Search…"
		},
		slideover: { close: "Close" },
		table: { noData: "No data" },
		toast: { close: "Close" }
	}
});
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useLocale.js
var localeContextInjectionKey = Symbol.for("nuxt-ui.locale-context");
var _useLocale = (localeOverrides) => {
	const locale = localeOverrides || (0, vue_exports.toRef)((0, vue_exports.inject)(localeContextInjectionKey, en_default));
	return buildLocaleContext((0, vue_exports.computed)(() => locale.value || en_default));
};
var useLocale = _useLocale;
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/usePortal.js
var portalTargetInjectionKey = Symbol("nuxt-ui.portal-target");
function usePortal(portal) {
	const globalPortal = (0, vue_exports.inject)(portalTargetInjectionKey, void 0);
	const value = (0, vue_exports.computed)(() => portal.value === true ? globalPortal?.value : portal.value);
	const disabled = (0, vue_exports.computed)(() => typeof value.value === "boolean" ? !value.value : false);
	const to = (0, vue_exports.computed)(() => typeof value.value === "boolean" ? "body" : value.value);
	return (0, vue_exports.computed)(() => ({
		to: to.value,
		disabled: disabled.value
	}));
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useComponentProps.js
var [_injectThemeContext, provideThemeContext] = createContext("UTheme", "RootContext");
var defaultThemeContext = { defaults: (0, vue_exports.computed)(() => ({})) };
function injectThemeContext(fallback = defaultThemeContext) {
	return _injectThemeContext(fallback);
}
function camelCase(str) {
	return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}
function kebabCase(str) {
	return str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
function propIsDefined(vnode, prop) {
	if (!vnode || !vnode.props) return false;
	return vnode.props[camelCase(prop)] !== void 0 || vnode.props[kebabCase(prop)] !== void 0;
}
function useComponentProps(name, props) {
	const vm = (0, vue_exports.getCurrentInstance)();
	const { defaults } = injectThemeContext();
	const appConfig = useAppConfig();
	return new Proxy(props, {
		get(target, prop, receiver) {
			if (prop === "__v_isReactive") return true;
			if (prop === "__v_raw") return target;
			const raw = Reflect.get(target, prop, receiver);
			if (typeof prop !== "string") return raw;
			const themeEntry = name.includes(".") ? get(defaults.value, name) : defaults.value[name];
			if (prop === "ui") {
				const themeUi = themeEntry?.ui;
				if (!raw && !themeUi) return raw;
				return defu(raw ?? {}, themeUi ?? {});
			}
			if (prop === "class") {
				const themeClass = themeEntry?.class;
				if (themeClass === void 0) return raw;
				if (raw === void 0) return themeClass;
				return [themeClass, raw];
			}
			if (vm && propIsDefined(vm.vnode, prop)) return raw;
			const themeValue = themeEntry?.[prop];
			if (themeValue !== void 0) return themeValue;
			const appConfigValue = (name.includes(".") ? get(appConfig.ui ?? {}, name) : appConfig.ui?.[name])?.defaultVariants?.[prop];
			if (appConfigValue !== void 0) return appConfigValue;
			const propDef = vm?.type?.props?.[prop];
			if (propDef && Object.prototype.hasOwnProperty.call(propDef, "default")) return raw;
		},
		has: (t, p) => Reflect.has(t, p),
		ownKeys: (t) => Reflect.ownKeys(t),
		getOwnPropertyDescriptor: (t, p) => Reflect.getOwnPropertyDescriptor(t, p)
	});
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useForwardProps.js
function useForwardProps(source, emits) {
	const emitAsProps = emits ? useEmitAsProps(emits) : {};
	return (0, vue_exports.computed)(() => {
		const src = (0, vue_exports.unref)(source);
		const out = { ...emitAsProps };
		for (const key in src) {
			const value = src[key];
			if (value !== void 0) out[key] = value;
		}
		return out;
	});
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useToast.js
var toastMaxInjectionKey = Symbol("nuxt-ui.toast-max");
function useToast() {
	const toasts = useState("toasts", () => []);
	const max = (0, vue_exports.inject)(toastMaxInjectionKey, void 0);
	const running = (0, vue_exports.ref)(false);
	const queue = [];
	const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
	function mergeDuplicate(index, toast) {
		toasts.value[index] = {
			...toasts.value[index],
			...toast,
			_duplicate: (toasts.value[index]._duplicate || 0) + 1
		};
	}
	async function processQueue() {
		if (running.value || queue.length === 0) return;
		running.value = true;
		while (queue.length > 0) {
			await (0, vue_exports.nextTick)();
			const toast = queue.shift();
			const maxValue = max?.value ?? 5;
			if (maxValue <= 0) {
				if (toasts.value.length) toasts.value = [];
				continue;
			}
			const existingIndex = toasts.value.findIndex((t) => t.id === toast.id);
			if (existingIndex !== -1) {
				mergeDuplicate(existingIndex, toast);
				continue;
			}
			toasts.value = [...toasts.value, toast].slice(-maxValue);
		}
		running.value = false;
	}
	function add(toast) {
		const body = {
			id: generateId(),
			open: true,
			...toast
		};
		const existingIndex = toasts.value.findIndex((t) => t.id === body.id);
		if (existingIndex !== -1) {
			mergeDuplicate(existingIndex, body);
			return body;
		}
		queue.push(body);
		processQueue();
		return body;
	}
	function update(id, toast) {
		const index = toasts.value.findIndex((t) => t.id === id);
		if (index !== -1) {
			toasts.value[index] = {
				...toasts.value[index],
				...toast,
				duration: toast.duration,
				open: true,
				_updated: true
			};
			(0, vue_exports.nextTick)(() => {
				const i = toasts.value.findIndex((t) => t.id === id);
				if (i !== -1 && toasts.value[i]._updated) toasts.value[i] = {
					...toasts.value[i],
					_updated: void 0
				};
			});
		}
	}
	function remove(id) {
		const index = toasts.value.findIndex((t) => t.id === id);
		if (index !== -1 && toasts.value[index]._updated) return;
		if (index !== -1) toasts.value[index] = {
			...toasts.value[index],
			open: false
		};
		setTimeout(() => {
			toasts.value = toasts.value.filter((t) => t.id !== id);
		}, 200);
	}
	function clear() {
		toasts.value = [];
	}
	return {
		toasts,
		add,
		update,
		remove,
		clear
	};
}
//#endregion
//#region node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/chunk-OYFAXDFZ.js
var isArray = Array.isArray;
var joinClassValue = (value) => {
	if (!value && value !== 0 && value !== 0n) return "";
	if (typeof value === "string") return value;
	if (typeof value === "number") {
		if (value !== value) return "";
		return "" + value;
	}
	if (typeof value === "bigint") return "" + value;
	let result = "";
	if (isArray(value)) {
		const length = value.length;
		for (let index = 0; index < length; index++) {
			const item = value[index];
			if (!item && item !== 0 && item !== 0n) continue;
			const resolved = typeof item === "string" ? item : joinClassValue(item);
			if (resolved) {
				if (result) result += " ";
				result += resolved;
			}
		}
		return result;
	}
	if (typeof value === "object") {
		for (const key in value) if (value[key]) {
			if (result) result += " ";
			result += key;
		}
	}
	return result;
};
var SPACE_REGEX = /\s+/g;
var isArray2 = Array.isArray;
var removeExtraSpaces = (str) => {
	if (typeof str !== "string" || !str) return str;
	return str.replace(SPACE_REGEX, " ").trim();
};
var stringNeedsNormalize = (str) => {
	const len = str.length;
	if (len === 0) return false;
	const first = str.charCodeAt(0);
	const last = str.charCodeAt(len - 1);
	if (first === 32 || last === 32 || first >= 9 && first <= 13 || first === 160 || last >= 9 && last <= 13 || last === 160) return true;
	for (let i = 0; i < len; i++) {
		const code = str.charCodeAt(i);
		if (code >= 9 && code <= 13 || code === 160) return true;
		if (code === 32 && i + 1 < len && str.charCodeAt(i + 1) === 32) return true;
	}
	return false;
};
var cx = (...classnames) => {
	const result = joinClassValue(classnames);
	if (!result) return void 0;
	return stringNeedsNormalize(result) ? removeExtraSpaces(result) : result;
};
var falsyToString = (value) => value === false ? "false" : value === true ? "true" : value === 0 ? "0" : value;
var isEmptyObject = (obj) => {
	if (!obj || typeof obj !== "object") return true;
	for (const _ in obj) return false;
	return true;
};
var isEqual$1 = (obj1, obj2) => {
	if (obj1 === obj2) return true;
	if (!obj1 || !obj2) return false;
	const record1 = obj1;
	const record2 = obj2;
	const keys1 = Object.keys(record1);
	const keys2 = Object.keys(record2);
	if (keys1.length !== keys2.length) return false;
	for (let i = 0; i < keys1.length; i++) {
		const key = keys1[i];
		if (!keys2.includes(key)) return false;
		if (record1[key] !== record2[key]) return false;
	}
	return true;
};
var joinObjects = (obj1, obj2) => {
	const target = obj1;
	for (const key in obj2) if (Object.hasOwn(obj2, key)) {
		const val2 = obj2[key];
		if (key in target) target[key] = cx(target[key], val2);
		else target[key] = val2;
	}
	return obj1;
};
var flat = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		if (isArray2(el)) flat(el, target);
		else if (el) target.push(el);
	}
};
var flatMergeArrays = (...arrays) => {
	const result = [];
	flat(arrays, result);
	const filtered = [];
	for (let i = 0; i < result.length; i++) if (result[i]) filtered.push(result[i]);
	return filtered;
};
var mergeObjects = (obj1, obj2) => {
	const record1 = obj1;
	const record2 = obj2;
	const result = {};
	for (const key in record1) {
		const val1 = record1[key];
		if (key in record2) {
			const val2 = record2[key];
			if (isArray2(val1) || isArray2(val2)) result[key] = flatMergeArrays(val2, val1);
			else if (typeof val1 === "object" && typeof val2 === "object" && val1 && val2) result[key] = mergeObjects(val1, val2);
			else result[key] = val2 + " " + val1;
		} else result[key] = val1;
	}
	for (const key in record2) if (!(key in record1)) result[key] = record2[key];
	return result;
};
//#endregion
//#region node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/chunk-SUL6UUW2.js
var defaultConfig = {
	twMerge: true,
	twMergeConfig: {}
};
var VARIANT_CACHE_LIMIT = 256;
var OVERRIDE_CACHE_LIMIT = 128;
var CACHE_MISS = /* @__PURE__ */ Symbol("tv-cache-miss");
var hasClassOverride = (props) => (props == null ? void 0 : props.class) != null && props.class !== "" || (props == null ? void 0 : props.className) != null && props.className !== "";
var serializeFingerprintValue = (value) => {
	if (value === void 0) return "";
	if (value === null) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "number") return value === 0 ? "0" : String(value);
	if (typeof value === "bigint") return String(value);
	const mapped = falsyToString(value);
	const mappedType = typeof mapped;
	if (mappedType === "string" || mappedType === "number" || mappedType === "boolean" || mappedType === "bigint") return String(mapped);
	if (mappedType === "object") try {
		return JSON.stringify(mapped);
	} catch {
		return null;
	}
	return null;
};
var appendSignatureValue = (out, value) => {
	if (value === void 0) return out;
	if (value === null) return out + "null";
	const type = typeof value;
	if (type === "string" || type === "number" || type === "boolean" || type === "bigint") return out + String(value);
	if (Array.isArray(value)) return out + value.join("\0");
	try {
		return out + JSON.stringify(value);
	} catch {
		return out + "?";
	}
};
var buildPropsFingerprint = (variantKeys, defaultVariants, props, slotProps) => {
	let fingerprint = "";
	const seen = /* @__PURE__ */ Object.create(null);
	for (let i = 0; i < variantKeys.length; i++) {
		const key = variantKeys[i];
		seen[key] = 1;
		let value = defaultVariants[key];
		if (props && props[key] !== void 0) value = props[key];
		const serialized = serializeFingerprintValue(value);
		if (serialized === null) return null;
		fingerprint += key + ":" + serialized + ";";
	}
	const extras = [];
	for (const key in defaultVariants) {
		if (key === "class" || key === "className" || seen[key]) continue;
		seen[key] = 1;
		extras.push(key);
	}
	if (props) for (const key in props) {
		if (key === "class" || key === "className" || seen[key] || props[key] === void 0) continue;
		seen[key] = 1;
		extras.push(key);
	}
	if (extras.length > 1) extras.sort();
	for (let i = 0; i < extras.length; i++) {
		const key = extras[i];
		let value = defaultVariants[key];
		if (props && props[key] !== void 0) value = props[key];
		const serialized = serializeFingerprintValue(value);
		if (serialized === null) return null;
		fingerprint += key + ":" + serialized + ";";
	}
	return fingerprint;
};
var buildCompoundsSignature = (compoundVariants, compoundSlots) => {
	let signature = "";
	for (let i = 0; i < compoundVariants.length; i++) {
		const { conditionKeys, source } = compoundVariants[i];
		for (let j = 0; j < conditionKeys.length; j++) {
			const key = conditionKeys[j];
			signature += key + "=";
			signature = appendSignatureValue(signature, source[key]);
			signature += ",";
		}
		signature += "c=";
		signature = appendSignatureValue(signature, source.class);
		signature += "|cn=";
		signature = appendSignatureValue(signature, source.className);
		signature += ";";
	}
	for (let i = 0; i < compoundSlots.length; i++) {
		const { conditionKeys, source } = compoundSlots[i];
		for (let j = 0; j < conditionKeys.length; j++) {
			const key = conditionKeys[j];
			signature += key + "=";
			signature = appendSignatureValue(signature, source[key]);
			signature += ",";
		}
		if (Array.isArray(source.slots)) signature += "slots=" + source.slots.join(",") + ",";
		signature += "c=";
		signature = appendSignatureValue(signature, source.class);
		signature += "|cn=";
		signature = appendSignatureValue(signature, source.className);
		signature += ";";
	}
	return signature;
};
var createBoundedCache = (limit = VARIANT_CACHE_LIMIT) => {
	let primary = /* @__PURE__ */ new Map();
	let secondary = null;
	return {
		get(key) {
			if (primary.has(key)) return primary.get(key);
			if (secondary == null ? void 0 : secondary.has(key)) {
				const value = secondary.get(key);
				primary.set(key, value);
				return value;
			}
			return CACHE_MISS;
		},
		set(key, value) {
			if (primary.size >= limit) {
				secondary = primary;
				primary = /* @__PURE__ */ new Map();
			}
			primary.set(key, value);
		}
	};
};
var createResultCache = (limit = VARIANT_CACHE_LIMIT) => {
	const cache = createBoundedCache(limit);
	return {
		get(key) {
			return cache.get(key);
		},
		set(key, value) {
			cache.set(key, value);
		}
	};
};
var createNestedOverrideCache = (limit = OVERRIDE_CACHE_LIMIT) => {
	let primary = /* @__PURE__ */ new Map();
	let secondary = null;
	let size = 0;
	return {
		get(coreKey, overrideKey) {
			const primaryInner = primary.get(coreKey);
			if (primaryInner) {
				const value = primaryInner.get(overrideKey);
				if (value !== void 0 || primaryInner.has(overrideKey)) return value;
			}
			if (secondary) {
				const secondaryInner = secondary.get(coreKey);
				if (secondaryInner) {
					const value = secondaryInner.get(overrideKey);
					if (value !== void 0 || secondaryInner.has(overrideKey)) {
						let promoteInner = primary.get(coreKey);
						if (!promoteInner) {
							promoteInner = /* @__PURE__ */ new Map();
							primary.set(coreKey, promoteInner);
						}
						if (!promoteInner.has(overrideKey)) size++;
						promoteInner.set(overrideKey, value);
						return value;
					}
				}
			}
			return CACHE_MISS;
		},
		set(coreKey, overrideKey, value) {
			if (size >= limit) {
				secondary = primary;
				primary = /* @__PURE__ */ new Map();
				size = 0;
			}
			let inner = primary.get(coreKey);
			if (!inner) {
				inner = /* @__PURE__ */ new Map();
				primary.set(coreKey, inner);
			}
			if (!inner.has(overrideKey)) size++;
			inner.set(overrideKey, value);
		}
	};
};
var createLazyOverrideMerge = (cn, config) => {
	let cache = null;
	return (core, props) => {
		if (!hasClassOverride(props)) return core;
		const classVal = props.class;
		const classNameVal = props.className;
		if (classVal != null && classVal !== "" && typeof classVal !== "string" || classNameVal != null && classNameVal !== "" && typeof classNameVal !== "string") return cn(config, core, classVal, classNameVal);
		cache ??= createNestedOverrideCache();
		const coreKey = core ?? "";
		const overrideKey = (typeof classVal === "string" ? classVal : "") + "\0" + (typeof classNameVal === "string" ? classNameVal : "");
		const cached = cache.get(coreKey, overrideKey);
		if (cached !== CACHE_MISS) return cached;
		const merged = cn(config, core, classVal, classNameVal);
		cache.set(coreKey, overrideKey, merged);
		return merged;
	};
};
function createState() {
	let cachedTwMerge = null;
	let cachedTwMergeConfig = {};
	let didTwMergeConfigChange = false;
	return {
		get cachedTwMerge() {
			return cachedTwMerge;
		},
		set cachedTwMerge(value) {
			cachedTwMerge = value;
		},
		get cachedTwMergeConfig() {
			return cachedTwMergeConfig;
		},
		set cachedTwMergeConfig(value) {
			cachedTwMergeConfig = value;
		},
		get didTwMergeConfigChange() {
			return didTwMergeConfigChange;
		},
		set didTwMergeConfigChange(value) {
			didTwMergeConfigChange = value;
		},
		reset() {
			cachedTwMerge = null;
			cachedTwMergeConfig = {};
			didTwMergeConfigChange = false;
		}
	};
}
var state = createState();
var synchronizeTwMergeConfig = (config) => {
	if (!isEmptyObject(config.twMergeConfig) && !isEqual$1(config.twMergeConfig, state.cachedTwMergeConfig)) {
		state.didTwMergeConfigChange = true;
		state.cachedTwMergeConfig = config.twMergeConfig;
	}
};
var compileVariants = (variants, variantKeys) => {
	const compiledVariants = [];
	for (let i = 0; i < variantKeys.length; i++) {
		const key = variantKeys[i];
		const values = variants[key];
		compiledVariants.push({
			key,
			values,
			isEmpty: isEmptyObject(values)
		});
	}
	return compiledVariants;
};
var compileCompoundVariants = (compoundVariants) => {
	if (!Array.isArray(compoundVariants) || compoundVariants.length === 0) return [];
	const result = [];
	for (let i = 0; i < compoundVariants.length; i++) {
		const compoundVariant = compoundVariants[i];
		const conditionKeys = [];
		for (const key in compoundVariant) if (key !== "class" && key !== "className") conditionKeys.push(key);
		result.push({
			conditionKeys,
			source: compoundVariant
		});
	}
	return result;
};
var compileCompoundSlots = (compoundSlots) => {
	if (!Array.isArray(compoundSlots) || compoundSlots.length === 0) return [];
	const result = [];
	for (let i = 0; i < compoundSlots.length; i++) {
		const compoundSlot = compoundSlots[i];
		const conditionKeys = [];
		for (const key in compoundSlot) if (key !== "slots" && key !== "class" && key !== "className") conditionKeys.push(key);
		result.push({
			conditionKeys,
			source: compoundSlot
		});
	}
	return result;
};
var indexCompoundSlotsBySlot = (compiledCompoundSlots) => {
	const index = {};
	for (let i = 0; i < compiledCompoundSlots.length; i++) {
		const compoundSlot = compiledCompoundSlots[i];
		const slots = compoundSlot.source.slots;
		if (!Array.isArray(slots)) continue;
		for (let j = 0; j < slots.length; j++) {
			const slotKey = slots[j];
			if (!index[slotKey]) index[slotKey] = [];
			index[slotKey].push(compoundSlot);
		}
	}
	return index;
};
var resolveOptions = (options, configProp) => {
	const { extend = null, slots: slotProps = {}, variants: variantsProps = {}, compoundVariants: compoundVariantsProps = [], compoundSlots: compoundSlotsProps = [], defaultVariants: defaultVariantsProps = {} } = options;
	const config = {
		...defaultConfig,
		...configProp
	};
	const hasSlots = options.slots !== void 0;
	const base = (extend == null ? void 0 : extend.base) ? cx(extend.base, options == null ? void 0 : options.base) : options == null ? void 0 : options.base;
	const variants = (extend == null ? void 0 : extend.variants) && !isEmptyObject(extend.variants) ? mergeObjects(variantsProps, extend.variants) : variantsProps;
	const defaultVariants = (extend == null ? void 0 : extend.defaultVariants) && !isEmptyObject(extend.defaultVariants) ? {
		...extend.defaultVariants,
		...defaultVariantsProps
	} : defaultVariantsProps;
	synchronizeTwMergeConfig(config);
	const isExtendedSlotsEmpty = !(extend == null ? void 0 : extend.slots) || isEmptyObject(extend.slots);
	const componentBase = hasSlots ? isExtendedSlotsEmpty && (extend == null ? void 0 : extend.base) ? cx(options == null ? void 0 : options.base, extend.base) : typeof (options == null ? void 0 : options.base) === "string" || (options == null ? void 0 : options.base) == null ? options.base : cx(options.base) : void 0;
	const componentSlots = hasSlots ? {
		base: componentBase,
		...slotProps
	} : {};
	const slots = isExtendedSlotsEmpty ? componentSlots : joinObjects({ ...extend == null ? void 0 : extend.slots }, isEmptyObject(componentSlots) ? { base: options == null ? void 0 : options.base } : componentSlots);
	const compoundVariants = !(extend == null ? void 0 : extend.compoundVariants) || isEmptyObject(extend.compoundVariants) ? compoundVariantsProps : flatMergeArrays(extend == null ? void 0 : extend.compoundVariants, compoundVariantsProps);
	const compoundSlots = !(extend == null ? void 0 : extend.compoundSlots) || isEmptyObject(extend.compoundSlots) ? compoundSlotsProps : flatMergeArrays(extend == null ? void 0 : extend.compoundSlots, compoundSlotsProps);
	const variantKeys = Object.keys(variants);
	return {
		config,
		extend,
		base,
		variants,
		defaultVariants,
		slots,
		compoundVariants,
		compoundSlots,
		compiledVariants: null,
		compiledCompoundVariants: null,
		compiledCompoundSlots: null,
		compiledCompoundSlotsBySlot: null,
		deferredError: compoundVariants && !Array.isArray(compoundVariants) ? /* @__PURE__ */ new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof compoundVariants}`) : compoundSlots && !Array.isArray(compoundSlots) ? /* @__PURE__ */ new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof compoundSlots}`) : null,
		mode: hasSlots || !isExtendedSlotsEmpty ? "slots" : variantKeys.length === 0 ? "plain" : "variants",
		slotKeys: null,
		variantKeys
	};
};
var compileResolvedOptions = (resolved) => {
	if (resolved.compiledVariants !== null) return resolved;
	resolved.compiledVariants = compileVariants(resolved.variants, resolved.variantKeys);
	resolved.compiledCompoundVariants = compileCompoundVariants(resolved.compoundVariants);
	resolved.compiledCompoundSlots = compileCompoundSlots(resolved.compoundSlots);
	resolved.compiledCompoundSlotsBySlot = indexCompoundSlotsBySlot(resolved.compiledCompoundSlots);
	resolved.slotKeys = resolved.slots && typeof resolved.slots === "object" ? Object.keys(resolved.slots) : [];
	return resolved;
};
var EMPTY_ARRAY = [];
var variantClassesScratch = [];
var compoundClassesScratch = [];
var compoundVariantBySlotScratch = [];
var compoundSlotClassesScratch = [];
var getCompleteProps = (defaultVariants, props, slotProps) => {
	const result = {};
	for (const key in defaultVariants) result[key] = defaultVariants[key];
	if (props) {
		for (const key in props) if (props[key] !== void 0) result[key] = props[key];
	}
	if (slotProps) {
		for (const key in slotProps) if (slotProps[key] !== void 0) result[key] = slotProps[key];
	}
	return result;
};
var isNullishOrFalse = (value) => value == null || value === false;
var matchesCompoundValue = (expected, actual) => {
	if (!Array.isArray(expected)) return expected === actual || isNullishOrFalse(expected) && isNullishOrFalse(actual);
	for (let i = 0; i < expected.length; i++) {
		const expectedValue = expected[i];
		if (expectedValue === actual || isNullishOrFalse(expectedValue) && isNullishOrFalse(actual)) return true;
	}
	return false;
};
var getVariantValue = (variant, defaultVariants, props, slotProps) => {
	if (variant.isEmpty) return null;
	const variantProp = (slotProps == null ? void 0 : slotProps[variant.key]) ?? (props == null ? void 0 : props[variant.key]);
	if (variantProp === null) return null;
	const variantKey = falsyToString(variantProp);
	if (typeof variantKey === "object") return null;
	const defaultVariantProp = defaultVariants == null ? void 0 : defaultVariants[variant.key];
	const key = variantKey != null ? variantKey : falsyToString(defaultVariantProp);
	return variant.values[key || "false"];
};
var matchesConditions = (compound, completeProps) => {
	const { conditionKeys, source } = compound;
	for (let i = 0; i < conditionKeys.length; i++) {
		const key = conditionKeys[i];
		if (!matchesCompoundValue(source[key], completeProps[key])) return false;
	}
	return true;
};
var pushCompoundClassForSlot = (result, slotKey, classValue) => {
	if (typeof classValue === "string") {
		if (slotKey === "base") result.push(classValue);
	} else if (classValue && typeof classValue === "object" && classValue[slotKey]) result.push(classValue[slotKey]);
};
var getVariantClassNames = (variants, defaultVariants, props) => {
	const result = variantClassesScratch;
	result.length = 0;
	for (let i = 0; i < variants.length; i++) {
		const value = getVariantValue(variants[i], defaultVariants, props);
		if (value) result.push(value);
	}
	return result;
};
var getVariantClassNamesBySlot = (slotKey, variants, defaultVariants, props, slotProps) => {
	const result = variantClassesScratch;
	result.length = 0;
	for (let i = 0; i < variants.length; i++) {
		const variantValue = getVariantValue(variants[i], defaultVariants, props, slotProps);
		const value = slotKey === "base" && typeof variantValue === "string" ? variantValue : variantValue && variantValue[slotKey];
		if (value) result.push(value);
	}
	return result;
};
var getCompoundVariantClasses = (compoundVariants, completeProps) => {
	const result = compoundClassesScratch;
	result.length = 0;
	for (let i = 0; i < compoundVariants.length; i++) {
		const compoundVariant = compoundVariants[i];
		if (!matchesConditions(compoundVariant, completeProps)) continue;
		if (compoundVariant.source.class) result.push(compoundVariant.source.class);
		if (compoundVariant.source.className) result.push(compoundVariant.source.className);
	}
	return result;
};
var getCompoundVariantClassesBySlot = (slotKey, compoundVariants, completeProps) => {
	const result = compoundVariantBySlotScratch;
	result.length = 0;
	for (let i = 0; i < compoundVariants.length; i++) {
		const compoundVariant = compoundVariants[i];
		if (!matchesConditions(compoundVariant, completeProps)) continue;
		pushCompoundClassForSlot(result, slotKey, compoundVariant.source.class);
		pushCompoundClassForSlot(result, slotKey, compoundVariant.source.className);
	}
	return result;
};
var getCompoundSlotClasses = (compoundSlotsForKey, completeProps) => {
	const result = compoundSlotClassesScratch;
	result.length = 0;
	for (let i = 0; i < compoundSlotsForKey.length; i++) {
		const compoundSlot = compoundSlotsForKey[i];
		if (!matchesConditions(compoundSlot, completeProps)) continue;
		if (compoundSlot.source.class) result.push(compoundSlot.source.class);
		if (compoundSlot.source.className) result.push(compoundSlot.source.className);
	}
	return result;
};
var createPlainResolver = (resolved, cn) => {
	const { base, config } = resolved;
	let core = CACHE_MISS;
	const mergeOverride = createLazyOverrideMerge(cn, config);
	return ((props) => {
		if (core === CACHE_MISS) core = cn(config, base);
		return mergeOverride(core, props);
	});
};
var createVariantResolver = (resolved, cn) => {
	const { base, config, defaultVariants, deferredError, variantKeys } = resolved;
	let compiledCompoundVariants = resolved.compiledCompoundVariants;
	let compiledVariants = resolved.compiledVariants;
	let compiledCompoundSlots = EMPTY_ARRAY;
	let cache = null;
	const mergeOverride = createLazyOverrideMerge(cn, config);
	let coldInvokesRemaining = 1;
	const computeCore = (props) => {
		const compoundClasses = compiledCompoundVariants.length > 0 ? getCompoundVariantClasses(compiledCompoundVariants, getCompleteProps(defaultVariants, props)) : void 0;
		return cn(config, base, getVariantClassNames(compiledVariants, defaultVariants, props), compoundClasses);
	};
	return ((props) => {
		if (deferredError) throw deferredError;
		if (compiledVariants === null || compiledCompoundVariants === null) {
			compileResolvedOptions(resolved);
			compiledVariants = resolved.compiledVariants;
			compiledCompoundVariants = resolved.compiledCompoundVariants;
			compiledCompoundSlots = resolved.compiledCompoundSlots ?? EMPTY_ARRAY;
		}
		let core;
		if (coldInvokesRemaining > 0) {
			coldInvokesRemaining--;
			core = computeCore(props);
		} else {
			cache ??= createResultCache();
			const propsFingerprint = buildPropsFingerprint(variantKeys, defaultVariants, props);
			if (propsFingerprint !== null) {
				const compoundsSig = compiledCompoundVariants.length > 0 || compiledCompoundSlots.length > 0 ? buildCompoundsSignature(compiledCompoundVariants, compiledCompoundSlots) : "";
				const cacheKey = propsFingerprint + "#" + compoundsSig;
				const cached = cache.get(cacheKey);
				if (cached !== CACHE_MISS) core = cached;
				else {
					core = computeCore(props);
					cache.set(cacheKey, core);
				}
			} else core = computeCore(props);
		}
		return mergeOverride(core, props);
	});
};
var createSlotsResolver = (resolved, cn) => {
	const { config, defaultVariants, deferredError, slots, variantKeys } = resolved;
	let compoundVariants = null;
	let compoundSlots = null;
	let keys = null;
	let slotComputers = null;
	let hasCompounds = false;
	let mergeOverride = null;
	let parentCache = null;
	let coldParentInvokesRemaining = 1;
	const ensureCompiled = () => {
		if (keys !== null) return;
		if (resolved.compiledVariants === null || resolved.compiledCompoundVariants === null || resolved.compiledCompoundSlots === null || resolved.compiledCompoundSlotsBySlot === null || resolved.slotKeys === null) compileResolvedOptions(resolved);
		const variants = resolved.compiledVariants;
		compoundVariants = resolved.compiledCompoundVariants;
		compoundSlots = resolved.compiledCompoundSlots;
		const compoundSlotsBySlot = resolved.compiledCompoundSlotsBySlot;
		keys = resolved.slotKeys;
		hasCompounds = compoundVariants.length > 0 || compoundSlots.length > 0;
		mergeOverride = createLazyOverrideMerge(cn, config);
		const computers = new Array(keys.length);
		for (let i = 0; i < keys.length; i++) {
			const slotKey = keys[i];
			const compoundSlotsForKey = compoundSlotsBySlot[slotKey] ?? EMPTY_ARRAY;
			computers[i] = (propsRef, slotProps) => {
				const completeProps = hasCompounds ? getCompleteProps(defaultVariants, propsRef, slotProps) : void 0;
				const compoundVariantClasses = completeProps ? getCompoundVariantClassesBySlot(slotKey, compoundVariants, completeProps) : void 0;
				const compoundSlotClasses = completeProps ? getCompoundSlotClasses(compoundSlotsForKey, completeProps) : void 0;
				return cn(config, slots[slotKey], getVariantClassNamesBySlot(slotKey, variants, defaultVariants, propsRef, slotProps), compoundVariantClasses, compoundSlotClasses);
			};
		}
		slotComputers = computers;
	};
	const createSlotsResult = (props) => {
		const slotKeys = keys;
		const computers = slotComputers;
		const overrideMerge = mergeOverride;
		const result = {};
		for (let i = 0; i < slotKeys.length; i++) {
			const compute = computers[i];
			const core = compute(props);
			result[slotKeys[i]] = (slotProps) => {
				if (slotProps == null) return core;
				let hasVariantOverride = false;
				for (const key in slotProps) {
					if (key === "class" || key === "className") continue;
					if (slotProps[key] !== void 0) {
						hasVariantOverride = true;
						break;
					}
				}
				if (!hasVariantOverride) return overrideMerge(core, slotProps);
				return overrideMerge(compute(props, slotProps), slotProps);
			};
		}
		return result;
	};
	return ((props) => {
		if (deferredError) throw deferredError;
		ensureCompiled();
		if (coldParentInvokesRemaining > 0) {
			coldParentInvokesRemaining--;
			return createSlotsResult(props);
		}
		const propsFingerprint = buildPropsFingerprint(variantKeys, defaultVariants, props);
		if (propsFingerprint === null) return createSlotsResult(props);
		const compoundsSig = hasCompounds ? buildCompoundsSignature(compoundVariants, compoundSlots) : "";
		const cacheKey = propsFingerprint + "#" + compoundsSig;
		parentCache ??= createBoundedCache();
		const cached = parentCache.get(cacheKey);
		if (cached !== CACHE_MISS) return cached;
		const next = createSlotsResult(props);
		parentCache.set(cacheKey, next);
		return next;
	});
};
var createClassResolver = (resolved, cn) => {
	if (resolved.mode === "plain") return createPlainResolver(resolved, cn);
	let resolver;
	return ((props) => {
		resolver ??= resolved.mode === "slots" ? createSlotsResolver(resolved, cn) : createVariantResolver(resolved, cn);
		return resolver(props);
	});
};
var attachComponentMetadata = (component, resolved) => {
	component.variantKeys = resolved.variantKeys;
	component.extend = resolved.extend;
	component.base = resolved.base;
	component.slots = resolved.slots;
	component.variants = resolved.variants;
	component.defaultVariants = resolved.defaultVariants;
	component.compoundSlots = resolved.compoundSlots;
	component.compoundVariants = resolved.compoundVariants;
};
var getTailwindVariants = (cn) => {
	const tv = (options, configProp) => {
		const resolved = resolveOptions(options, configProp);
		const component = createClassResolver(resolved, cn);
		attachComponentMetadata(component, resolved);
		return component;
	};
	const createTV = (configProp) => {
		return (options, config) => tv(options, config ? mergeObjects(configProp, config) : configProp);
	};
	return {
		tv,
		createTV
	};
};
//#endregion
//#region node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/index.js
var concatArrays = (array1, array2) => {
	const length1 = array1.length;
	const length2 = array2.length;
	const combined = new Array(length1 + length2);
	for (let i = 0; i < length1; i++) combined[i] = array1[i];
	for (let i = 0; i < length2; i++) combined[length1 + i] = array2[i];
	return combined;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className[0] === "[" && className[className.length - 1] === "]") return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let index = 0; index < validatorsLength; index++) {
		const validatorObject = validators[index];
		if (validatorObject.validator(classRest)) return validatorObject.classGroupId;
	}
};
var getGroupIdForArbitraryProperty = (className) => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	if (colonIndex === -1) return;
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
};
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const length = classGroup.length;
	for (let index = 0; index < length; index++) {
		const classDefinition = classGroup[index];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const length = entries.length;
	for (let index = 0; index < length; index++) {
		const [key, value] = entries[index];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const length = parts.length;
	for (let index = 0; index < length; index++) {
		const part = parts[index];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (classDefinition) => "isThemeGetter" in classDefinition && classDefinition.isThemeGetter === true;
var IMPORTANT_MODIFIER = "!";
var CHAR_MODIFIER_SEPARATOR = 58;
var CHAR_POSTFIX_SEPARATOR = 47;
var CHAR_OPEN_BRACKET = 91;
var CHAR_CLOSE_BRACKET = 93;
var CHAR_OPEN_PAREN = 40;
var CHAR_CLOSE_PAREN = 41;
var CHAR_IMPORTANT = 33;
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal: void 0
});
var parseClassName = (className) => {
	const modifiers = [];
	let bracketDepth = 0;
	let parenDepth = 0;
	let modifierStart = 0;
	let postfixModifierPosition;
	const len = className.length;
	for (let index = 0; index < len; index++) {
		const charCode = className.charCodeAt(index);
		if (bracketDepth === 0 && parenDepth === 0) {
			if (charCode === CHAR_MODIFIER_SEPARATOR) {
				modifiers.push(className.slice(modifierStart, index));
				modifierStart = index + 1;
				continue;
			}
			if (charCode === CHAR_POSTFIX_SEPARATOR) {
				postfixModifierPosition = index;
				continue;
			}
		}
		if (charCode === CHAR_OPEN_BRACKET) bracketDepth++;
		else if (charCode === CHAR_CLOSE_BRACKET) bracketDepth--;
		else if (charCode === CHAR_OPEN_PAREN) parenDepth++;
		else if (charCode === CHAR_CLOSE_PAREN) parenDepth--;
	}
	const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
	let baseClassName = baseClassNameWithImportantModifier;
	let hasImportantModifier = false;
	const lastIndex = baseClassNameWithImportantModifier.length - 1;
	if (baseClassNameWithImportantModifier.charCodeAt(lastIndex) === CHAR_IMPORTANT) {
		baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
		hasImportantModifier = true;
	} else if (baseClassNameWithImportantModifier.charCodeAt(0) === CHAR_IMPORTANT) {
		baseClassName = baseClassNameWithImportantModifier.slice(1);
		hasImportantModifier = true;
	}
	const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
	return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
};
var createSortModifiers = (config) => {
	const orderSensitiveModifiers = new Set(config.orderSensitiveModifiers);
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let index = 0; index < modifiers.length; index++) {
			const modifier = modifiers[index];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = orderSensitiveModifiers.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					for (let segmentIndex = 0; segmentIndex < currentSegment.length; segmentIndex++) result.push(currentSegment[segmentIndex]);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			for (let segmentIndex = 0; segmentIndex < currentSegment.length; segmentIndex++) result.push(currentSegment[segmentIndex]);
		}
		return result;
	};
};
var EXTERNAL_DESCRIPTOR = {
	isExternal: true,
	classId: -1,
	conflictIds: []
};
var DESCRIPTOR_CACHE_SIZE = 4096;
var MAX_CONFLICT_KEYS = 16384;
var createConfigUtils = (config) => {
	const sortModifiers = createSortModifiers(config);
	const postfixLookupClassGroupIds = createPostfixLookupClassGroupIds(config);
	const { getClassGroupId, getConflictingClassGroupIds } = createClassGroupUtils(config);
	let descriptorCache = /* @__PURE__ */ Object.create(null);
	let previousDescriptorCache = /* @__PURE__ */ Object.create(null);
	let descriptorCacheSize = 0;
	let claimedGeneration = /* @__PURE__ */ new Int32Array(256);
	let currentGeneration = 0;
	let keepFlags = /* @__PURE__ */ new Uint8Array(64);
	let splitSawNonSpaceWhitespace = false;
	const splitClassList = (classList) => {
		const tokens = [];
		const length = classList.length;
		let tokenStart = -1;
		splitSawNonSpaceWhitespace = false;
		for (let index = 0; index < length; index++) {
			const charCode = classList.charCodeAt(index);
			if (charCode === 32) {
				if (tokenStart !== -1) {
					tokens.push(classList.slice(tokenStart, index));
					tokenStart = -1;
				}
			} else if (charCode >= 9 && charCode <= 13) {
				splitSawNonSpaceWhitespace = true;
				if (tokenStart !== -1) {
					tokens.push(classList.slice(tokenStart, index));
					tokenStart = -1;
				}
			} else if (tokenStart === -1) tokenStart = index;
		}
		if (tokenStart !== -1) tokens.push(classList.slice(tokenStart));
		return tokens;
	};
	const conflictKeyIds = /* @__PURE__ */ new Map();
	let nextConflictKeyId = 0;
	const internConflictKey = (conflictKey) => {
		let id = conflictKeyIds.get(conflictKey);
		if (id === void 0) {
			id = nextConflictKeyId++;
			conflictKeyIds.set(conflictKey, id);
			if (id >= claimedGeneration.length) {
				const grown = new Int32Array(claimedGeneration.length * 2);
				grown.set(claimedGeneration);
				claimedGeneration = grown;
			}
		}
		return id;
	};
	const computeClassDescriptor = (originalClassName) => {
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) return EXTERNAL_DESCRIPTOR;
		let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
		let classGroupId;
		if (hasPostfixModifier) {
			const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
			classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) return EXTERNAL_DESCRIPTOR;
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) return EXTERNAL_DESCRIPTOR;
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		const conflictIds = [];
		for (let index = 0; index < conflictGroups.length; index++) conflictIds.push(internConflictKey(modifierId + conflictGroups[index]));
		return {
			isExternal: false,
			classId: internConflictKey(modifierId + classGroupId),
			conflictIds
		};
	};
	const getClassDescriptor = (originalClassName) => {
		let descriptor = descriptorCache[originalClassName];
		if (descriptor !== void 0) return descriptor;
		descriptor = previousDescriptorCache[originalClassName];
		if (descriptor === void 0) descriptor = computeClassDescriptor(originalClassName);
		descriptorCache[originalClassName] = descriptor;
		if (++descriptorCacheSize > DESCRIPTOR_CACHE_SIZE) {
			descriptorCacheSize = 0;
			previousDescriptorCache = descriptorCache;
			descriptorCache = /* @__PURE__ */ Object.create(null);
		}
		return descriptor;
	};
	const mergeClassList = (classList) => {
		const classNames = splitClassList(classList);
		const classCount = classNames.length;
		if (classCount === 1) return classNames[0];
		if (nextConflictKeyId > MAX_CONFLICT_KEYS) {
			conflictKeyIds.clear();
			nextConflictKeyId = 0;
			descriptorCache = /* @__PURE__ */ Object.create(null);
			previousDescriptorCache = /* @__PURE__ */ Object.create(null);
			descriptorCacheSize = 0;
		}
		currentGeneration = currentGeneration + 1 | 0;
		if (currentGeneration === 0) currentGeneration = 1;
		const generation = currentGeneration;
		if (classCount > keepFlags.length) {
			let capacity = keepFlags.length;
			while (capacity < classCount) capacity *= 2;
			keepFlags = new Uint8Array(capacity);
		}
		let didDrop = false;
		let tokenCharCount = 0;
		for (let index = classCount - 1; index >= 0; index -= 1) {
			const className = classNames[index];
			tokenCharCount += className.length;
			const descriptor = getClassDescriptor(className);
			if (descriptor.isExternal) {
				keepFlags[index] = 1;
				continue;
			}
			const classId = descriptor.classId;
			if (claimedGeneration[classId] === generation) {
				keepFlags[index] = 0;
				didDrop = true;
				continue;
			}
			claimedGeneration[classId] = generation;
			const conflictIds = descriptor.conflictIds;
			for (let conflictIndex = 0; conflictIndex < conflictIds.length; conflictIndex++) claimedGeneration[conflictIds[conflictIndex]] = generation;
			keepFlags[index] = 1;
		}
		if (!didDrop && !splitSawNonSpaceWhitespace && classList.length === tokenCharCount + classCount - 1) return classList;
		let result = "";
		for (let index = 0; index < classCount; index++) if (keepFlags[index] === 1) {
			if (result) result += " ";
			result += classNames[index];
		}
		return result;
	};
	return {
		parseClassName,
		sortModifiers,
		postfixLookupClassGroupIds,
		getClassGroupId,
		getConflictingClassGroupIds,
		getClassDescriptor,
		mergeClassList
	};
};
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = /* @__PURE__ */ Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let index = 0; index < classGroupIds.length; index++) lookup[classGroupIds[index]] = true;
	return lookup;
};
var MERGE_CACHE_SIZE = 500;
var createTailwindMerge = (createConfig) => {
	let configUtils;
	let mergeClassList;
	let cache = /* @__PURE__ */ Object.create(null);
	let previousCache = /* @__PURE__ */ Object.create(null);
	let cacheSize = 0;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfig());
		mergeClassList = configUtils.mergeClassList;
		merge.mergeString = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		let result = cache[classList];
		if (result !== void 0) return result;
		result = previousCache[classList];
		if (result === void 0) result = mergeClassList(classList);
		cache[classList] = result;
		if (++cacheSize > MERGE_CACHE_SIZE) {
			cacheSize = 0;
			previousCache = cache;
			cache = /* @__PURE__ */ Object.create(null);
		}
		return result;
	};
	const merge = (...args) => merge.mergeString(joinClassValue(args));
	merge.mergeString = initTailwindMerge;
	return merge;
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var toNumber = Number;
var numberIsNaN = Number.isNaN;
var numberIsInteger = Number.isInteger;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => Boolean(value) && !numberIsNaN(toNumber(value));
var isInteger = (value) => Boolean(value) && numberIsInteger(toNumber(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only", "not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/width
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/height
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				(
				/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
				{ screen: [themeBreakpoint] }),
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [themeLeading, ...scaleUnambiguousSpacing()] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
var mergeConfigs = (baseConfig, { extend = {}, override = {} }) => {
	overrideConfigProperties(baseConfig.theme, override.theme);
	overrideConfigProperties(baseConfig.classGroups, override.classGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
	overrideProperty(baseConfig, "postfixLookupClassGroups", override.postfixLookupClassGroups);
	overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
	mergeConfigProperties(baseConfig.theme, extend.theme);
	mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
	mergeArrayProperties(baseConfig, extend, "postfixLookupClassGroups");
	mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
	return baseConfig;
};
var overrideProperty = (baseObject, overrideKey, overrideValue) => {
	if (overrideValue !== void 0) baseObject[overrideKey] = overrideValue;
};
var overrideConfigProperties = (baseObject, overrideObject) => {
	if (overrideObject) for (const key in overrideObject) overrideProperty(baseObject, key, overrideObject[key]);
};
var mergeConfigProperties = (baseObject, mergeObject) => {
	if (mergeObject) for (const key in mergeObject) mergeArrayProperties(baseObject, mergeObject, key);
};
var mergeArrayProperties = (baseObject, mergeObject, key) => {
	const mergeValue = mergeObject[key];
	if (mergeValue !== void 0) baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
};
var createMerger = (config) => {
	if (!config) return createTailwindMerge(getDefaultConfig);
	return createTailwindMerge(typeof config === "function" ? () => config(getDefaultConfig()) : () => mergeConfigs(getDefaultConfig(), config));
};
var toMergerConfig = (config) => {
	if (isEmptyObject(config)) return void 0;
	const source = config;
	const extend = { ...source.extend ?? {} };
	for (const key of [
		"theme",
		"classGroups",
		"conflictingClassGroups",
		"conflictingClassGroupModifiers",
		"postfixLookupClassGroups",
		"orderSensitiveModifiers",
		"cacheSize",
		"prefix",
		"separator",
		"experimentalParseClassName"
	]) if (source[key] !== void 0 && extend[key] === void 0) extend[key] = source[key];
	const result = {};
	if (Object.keys(extend).length > 0) result.extend = extend;
	if (source.override != null && !isEmptyObject(source.override)) result.override = source.override;
	if (!result.extend && !result.override) return void 0;
	return result;
};
var createTwMerge = (cachedTwMergeConfig) => {
	const merger = createMerger(toMergerConfig(cachedTwMergeConfig));
	return (classList) => merger.mergeString(classList);
};
var defaultMerger;
var getDefaultMerger = () => {
	if (!defaultMerger) defaultMerger = createMerger();
	return defaultMerger;
};
var ensureConfiguredMerger = () => {
	if (!state.cachedTwMerge || state.didTwMergeConfigChange) {
		state.didTwMergeConfigChange = false;
		state.cachedTwMerge = createTwMerge(state.cachedTwMergeConfig);
	}
	return state.cachedTwMerge;
};
var syncTwMergeConfig = (config) => {
	const next = config == null ? void 0 : config.twMergeConfig;
	if (!next || isEmptyObject(next)) return;
	if (!isEqual$1(next, state.cachedTwMergeConfig)) {
		state.cachedTwMergeConfig = next;
		state.didTwMergeConfigChange = true;
	}
};
var joinArgs = (classnames) => joinClassValue(classnames);
var IS_V8 = (() => {
	const error = /* @__PURE__ */ new Error();
	return !("line" in error) && !("lineNumber" in error);
})();
var ARG_CACHE_BUCKET_SIZE = 64;
var ARG_CACHE_SIZE = 500;
var argCache = /* @__PURE__ */ new Map();
var previousArgCache = /* @__PURE__ */ new Map();
var argCacheCount = 0;
var clearArgCache = () => {
	argCache = /* @__PURE__ */ new Map();
	previousArgCache = /* @__PURE__ */ new Map();
	argCacheCount = 0;
};
var mergeStringDefault = (joined) => {
	if (!joined) return void 0;
	if (joined.indexOf(" ") === -1) return joined;
	return getDefaultMerger().mergeString(joined) || void 0;
};
var storeArgCache = (firstKey, rest, result) => {
	let target = argCache.get(firstKey);
	if (target === void 0) {
		target = [];
		argCache.set(firstKey, target);
	}
	if (target.length >= ARG_CACHE_BUCKET_SIZE) target.shift();
	target.push({
		rest,
		result
	});
	if (++argCacheCount > ARG_CACHE_SIZE) {
		argCacheCount = 0;
		previousArgCache = argCache;
		argCache = /* @__PURE__ */ new Map();
	}
};
var lookupArgCache = (firstKey, firstKeyIndex, truthyStringCount, length, getItem) => {
	let bucket = argCache.get(firstKey);
	if (bucket === void 0) bucket = previousArgCache.get(firstKey);
	if (bucket === void 0) return void 0;
	for (let entryIndex = 0; entryIndex < bucket.length; entryIndex++) {
		const entry = bucket[entryIndex];
		const rest = entry.rest;
		if (rest.length !== truthyStringCount - 1) continue;
		let restIndex = 0;
		let isMatch = true;
		for (let index = firstKeyIndex + 1; index < length; index++) {
			const item = getItem(index);
			if (!item) continue;
			if (item !== rest[restIndex++]) {
				isMatch = false;
				break;
			}
		}
		if (isMatch) return entry.result;
	}
};
var mergeVariadicCached = (inputs) => {
	const length = inputs.length;
	let firstKey = "";
	let firstKeyIndex = -1;
	let truthyStringCount = 0;
	let everyTruthyIsString = true;
	for (let index = 0; index < length; index++) {
		const item = inputs[index];
		if (!item) continue;
		if (typeof item !== "string") {
			everyTruthyIsString = false;
			break;
		}
		if (firstKeyIndex === -1) {
			firstKey = item;
			firstKeyIndex = index;
		}
		truthyStringCount++;
	}
	if (!everyTruthyIsString) return mergeStringDefault(joinArgs(inputs));
	if (truthyStringCount === 0) return void 0;
	if (truthyStringCount === 1) return mergeStringDefault(firstKey);
	const cached = lookupArgCache(firstKey, firstKeyIndex, truthyStringCount, length, (index) => inputs[index]);
	if (cached !== void 0) return cached || void 0;
	let joined = firstKey;
	const rest = [];
	for (let index = firstKeyIndex + 1; index < length; index++) {
		const item = inputs[index];
		if (!item) continue;
		joined += " " + item;
		rest.push(item);
	}
	const result = mergeStringDefault(joined) ?? "";
	storeArgCache(firstKey, rest, result);
	return result || void 0;
};
var originalStateReset = state.reset.bind(state);
state.reset = () => {
	defaultMerger = void 0;
	clearArgCache();
	originalStateReset();
};
var executeMerge = (classnames, config) => {
	const base = joinArgs(classnames);
	if (!base || !((config == null ? void 0 : config.twMerge) ?? true)) return base || void 0;
	if (base.indexOf(" ") === -1) return base;
	syncTwMergeConfig(config);
	return (Boolean((config == null ? void 0 : config.twMergeConfig) && !isEmptyObject(config.twMergeConfig)) ? ensureConfiguredMerger() : getDefaultMerger().mergeString)(base) || void 0;
};
var isDefaultMergeConfig = (config) => {
	if (config == null) return true;
	if (config.twMerge === false) return false;
	if (config.twMergeConfig && !isEmptyObject(config.twMergeConfig)) return false;
	return true;
};
var cnAdapter = (config, ...classnames) => executeMerge(classnames, config);
var cnMerge = (...classnames) => {
	return (config) => {
		if (isDefaultMergeConfig(config)) {
			if (IS_V8) return mergeVariadicCached(classnames);
			return mergeStringDefault(joinArgs(classnames));
		}
		return executeMerge(classnames, config);
	};
};
var runtime = getTailwindVariants(cnAdapter);
runtime.tv;
var createTV = runtime.createTV;
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/utils/tv.js
var config = virtual_nuxt__nuxt_2Fapp_config_default.ui?.tv;
var baseTv = /* @__PURE__ */ createTV(config);
function findReplacer(value) {
	if (typeof value === "function") return value;
	if (Array.isArray(value)) for (let i = value.length - 1; i >= 0; i--) {
		const replacer = findReplacer(value[i]);
		if (replacer) return replacer;
	}
}
function plainClasses(value) {
	if (Array.isArray(value)) return value.flatMap((item) => plainClasses(item));
	if (typeof value === "function") return [];
	return [value];
}
function applyReplacer(replacer, slotProps, resolveDefaults) {
	return cnMerge(replacer(resolveDefaults()), ...plainClasses(slotProps.class), ...plainClasses(slotProps.className))(config) ?? "";
}
function isMemoizable(value, depth = 0) {
	if (value === void 0 || value === null) return true;
	const type = typeof value;
	if (type === "string" || type === "boolean") return true;
	if (type === "number") return Number.isFinite(value);
	if (Array.isArray(value)) {
		if (depth >= 4) return false;
		for (const item of value) if (!isMemoizable(item, depth + 1)) return false;
		return true;
	}
	return false;
}
function memoKey(slotProps) {
	const proto = Object.getPrototypeOf(slotProps);
	if (proto !== Object.prototype && proto !== null) return;
	for (const key of Object.keys(slotProps)) if (!isMemoizable(slotProps[key])) return;
	return JSON.stringify(slotProps);
}
function wrapSlots(slots) {
	const memo = /* @__PURE__ */ new Map();
	return new Proxy(slots, { get(target, key) {
		const slot = target[key];
		if (typeof slot !== "function") return slot;
		return (slotProps = {}) => {
			const replacer = findReplacer(slotProps.class) ?? findReplacer(slotProps.className);
			if (!replacer) {
				const cacheKey = memoKey(slotProps);
				if (cacheKey === void 0) return slot(slotProps);
				let cache = memo.get(key);
				if (!cache) {
					cache = /* @__PURE__ */ new Map();
					memo.set(key, cache);
				}
				let result = cache.get(cacheKey);
				if (result === void 0 && !cache.has(cacheKey)) {
					if (cache.size >= 500) cache.clear();
					result = slot(slotProps);
					cache.set(cacheKey, result);
				}
				return result;
			}
			return applyReplacer(replacer, slotProps, () => slot({
				...slotProps,
				class: void 0,
				className: void 0
			}));
		};
	} });
}
function defaultClasses(value) {
	return cnMerge(value)(config) ?? "";
}
function resolveReplacers(componentConfig) {
	if (!componentConfig || typeof componentConfig !== "object") return componentConfig;
	const slots = componentConfig.slots;
	const replacers = slots && typeof slots === "object" ? Object.entries(slots).filter((entry) => typeof entry[1] === "function") : [];
	const baseReplacer = typeof componentConfig.base === "function" ? componentConfig.base : void 0;
	if (!replacers.length && !baseReplacer) return componentConfig;
	const extend = componentConfig.extend;
	const resolved = { ...componentConfig };
	let extendSlots;
	let blankExtendBase = false;
	if (baseReplacer) {
		resolved.base = baseReplacer(defaultClasses(extend?.slots?.base ?? extend?.base));
		if (extend?.slots?.base) {
			extendSlots ??= { ...extend.slots };
			extendSlots.base = "";
		}
		if (extend?.base) blankExtendBase = true;
	}
	if (replacers.length) {
		const cleaned = { ...slots };
		for (const [slot, replacer] of replacers) {
			cleaned[slot] = replacer(defaultClasses(extend?.slots?.[slot]));
			if (extend?.slots?.[slot]) {
				extendSlots ??= { ...extend.slots };
				extendSlots[slot] = "";
			}
		}
		resolved.slots = cleaned;
	}
	if (extendSlots || blankExtendBase) {
		const cleanedExtend = { ...extend };
		if (extendSlots) cleanedExtend.slots = extendSlots;
		if (blankExtendBase) cleanedExtend.base = "";
		resolved.extend = cleanedExtend;
	}
	return resolved;
}
var tv = ((componentConfig) => {
	const component = baseTv(resolveReplacers(componentConfig));
	return new Proxy(component, { apply(target, thisArg, args) {
		const result = Reflect.apply(target, thisArg, args);
		if (result && typeof result === "object") return wrapSlots(result);
		if (typeof result === "string") {
			const slotProps = args[0] ?? {};
			const replacer = findReplacer(slotProps.class) ?? findReplacer(slotProps.className);
			if (replacer) return applyReplacer(replacer, slotProps, () => Reflect.apply(target, thisArg, [{
				...slotProps,
				class: void 0,
				className: void 0
			}]));
		}
		return result;
	} });
});
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/icon/defaults.js
/** Default values for dimensions */
var defaultIconDimensions = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
});
/** Default values for transformations */
var defaultIconTransformations = Object.freeze({
	rotate: 0,
	vFlip: false,
	hFlip: false
});
/** Default values for all optional IconifyIcon properties */
var defaultIconProps = Object.freeze({
	...defaultIconDimensions,
	...defaultIconTransformations
});
Object.freeze({
	...defaultIconProps,
	body: "",
	hidden: false
});
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/icon/square.js
/**
* Make icon viewBox square
*/
function makeViewBoxSquare(viewBox) {
	const [left, top, width, height] = viewBox;
	if (width !== height) {
		const max = Math.max(width, height);
		return [
			left - (max - width) / 2,
			top - (max - height) / 2,
			max,
			max
		];
	}
	return viewBox;
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/svg/size.js
/**
* Regular expressions for calculating dimensions
*/
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
	if (ratio === 1) return size;
	precision = precision || 100;
	if (typeof size === "number") return Math.ceil(size * ratio * precision) / precision;
	if (typeof size !== "string") return size;
	const oldParts = size.split(unitsSplit);
	if (oldParts === null || !oldParts.length) return size;
	const newParts = [];
	let code = oldParts.shift();
	let isNumber = unitsTest.test(code);
	while (true) {
		if (isNumber) {
			const num = parseFloat(code);
			if (isNaN(num)) newParts.push(code);
			else newParts.push(Math.ceil(num * ratio * precision) / precision);
		} else newParts.push(code);
		code = oldParts.shift();
		if (code === void 0) return newParts.join("");
		isNumber = !isNumber;
	}
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/customisations/defaults.js
/**
* Default icon customisations values
*/
var defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
});
var defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
});
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/svg/defs.js
function splitSVGDefs(content, tag = "defs") {
	let defs = "";
	const index = content.indexOf("<" + tag);
	while (index >= 0) {
		const start = content.indexOf(">", index);
		const end = content.indexOf("</" + tag);
		if (start === -1 || end === -1) break;
		const endEnd = content.indexOf(">", end);
		if (endEnd === -1) break;
		defs += content.slice(start + 1, end).trim();
		content = content.slice(0, index).trim() + content.slice(endEnd + 1);
	}
	return {
		defs,
		content
	};
}
/**
* Merge defs and content
*/
function mergeDefsAndContent(defs, content) {
	return defs ? "<defs>" + defs + "</defs>" + content : content;
}
/**
* Wrap SVG content, without wrapping definitions
*/
function wrapSVGContent(body, start, end) {
	const split = splitSVGDefs(body);
	return mergeDefsAndContent(split.defs, start + split.content + end);
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/svg/build.js
/**
* Check if value should be unset. Allows multiple keywords
*/
var isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
/**
* Get SVG attributes and content from icon + customisations
*
* Does not generate style to make it compatible with frameworks that use objects for style, such as React.
* Instead, it generates 'inline' value. If true, rendering engine should add verticalAlign: -0.125em to icon.
*
* Customisations should be normalised by platform specific parser.
* Result should be converted to <svg> by platform specific parser.
* Use replaceIDs to generate unique IDs for body.
*/
function iconToSVG(icon, customisations) {
	const fullIcon = {
		...defaultIconProps,
		...icon
	};
	const fullCustomisations = {
		...defaultIconCustomisations,
		...customisations
	};
	const box = {
		left: fullIcon.left,
		top: fullIcon.top,
		width: fullIcon.width,
		height: fullIcon.height
	};
	let body = fullIcon.body;
	[fullIcon, fullCustomisations].forEach((props) => {
		const transformations = [];
		const hFlip = props.hFlip;
		const vFlip = props.vFlip;
		let rotation = props.rotate;
		if (hFlip) {
			if (vFlip) rotation += 2;
			else {
				transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
				transformations.push("scale(-1 1)");
				box.top = box.left = 0;
			}
		} else if (vFlip) {
			transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
			transformations.push("scale(1 -1)");
			box.top = box.left = 0;
		}
		let tempValue;
		if (rotation < 0) rotation -= Math.floor(rotation / 4) * 4;
		rotation = rotation % 4;
		switch (rotation) {
			case 1:
				tempValue = box.height / 2 + box.top;
				transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
				break;
			case 2:
				transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
				break;
			case 3:
				tempValue = box.width / 2 + box.left;
				transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
		}
		if (rotation % 2 === 1) {
			if (box.left !== box.top) {
				tempValue = box.left;
				box.left = box.top;
				box.top = tempValue;
			}
			if (box.width !== box.height) {
				tempValue = box.width;
				box.width = box.height;
				box.height = tempValue;
			}
		}
		if (transformations.length) body = wrapSVGContent(body, "<g transform=\"" + transformations.join(" ") + "\">", "</g>");
	});
	const customisationsWidth = fullCustomisations.width;
	const customisationsHeight = fullCustomisations.height;
	const boxWidth = box.width;
	const boxHeight = box.height;
	let width;
	let height;
	if (customisationsWidth === null) {
		height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
		width = calculateSize(height, boxWidth / boxHeight);
	} else {
		width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
		height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
	}
	const attributes = {};
	const setAttr = (prop, value) => {
		if (!isUnsetKeyword(value)) attributes[prop] = value.toString();
	};
	setAttr("width", width);
	setAttr("height", height);
	const viewBox = [
		box.left,
		box.top,
		boxWidth,
		boxHeight
	];
	attributes.viewBox = viewBox.join(" ");
	return {
		attributes,
		viewBox,
		body
	};
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/svg/url.js
/**
* Encode SVG for use in url()
*
* Short alternative to encodeURIComponent() that encodes only stuff used in SVG, generating
* smaller code.
*/
function encodeSVGforURL(svg) {
	return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
/**
* Generate data: URL from SVG
*/
function svgToData(svg) {
	return "data:image/svg+xml," + encodeSVGforURL(svg);
}
/**
* Generate url() from SVG
*/
function svgToURL(svg) {
	return "url(\"" + svgToData(svg) + "\")";
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/svg/html.js
/**
* Generate <svg>
*/
function iconToHTML(body, attributes) {
	let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (const attr in attributes) renderAttribsHTML += " " + attr + "=\"" + attributes[attr] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + renderAttribsHTML + ">" + body + "</svg>";
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/css/common.js
/**
* Generates common CSS rules for multiple icons, rendered as background/mask
*/
function getCommonCSSRules(options) {
	const result = Object.create(null);
	Object.assign(result, {
		display: "inline-block",
		width: "1em",
		height: "1em"
	});
	const varName = options.varName;
	if (options.pseudoSelector) result["content"] = "''";
	switch (options.mode) {
		case "background":
			if (varName) result["background-image"] = "var(--" + varName + ")";
			result["background-repeat"] = "no-repeat";
			result["background-size"] = "100% 100%";
			break;
		case "mask":
			result["background-color"] = "currentColor";
			if (varName) result["mask-image"] = result["-webkit-mask-image"] = "var(--" + varName + ")";
			result["mask-repeat"] = result["-webkit-mask-repeat"] = "no-repeat";
			result["mask-size"] = result["-webkit-mask-size"] = "100% 100%";
	}
	return result;
}
/**
* Generate CSS rules for one icon, rendered as background/mask
*
* This function excludes common rules
*/
function generateItemCSSRules(icon, options) {
	const result = Object.create(null);
	const varName = options.varName;
	const buildResult = iconToSVG(icon);
	let viewBox = buildResult.viewBox;
	if (viewBox[2] !== viewBox[3]) {
		if (options.forceSquare) viewBox = makeViewBoxSquare(viewBox);
		else result["width"] = calculateSize("1em", viewBox[2] / viewBox[3]);
	}
	const url = svgToURL(iconToHTML(buildResult.body.replace(/currentColor/g, options.color || "black"), {
		viewBox: `${viewBox[0]} ${viewBox[1]} ${viewBox[2]} ${viewBox[3]}`,
		width: `${viewBox[2]}`,
		height: `${viewBox[3]}`
	}));
	if (varName) result["--" + varName] = url;
	else switch (options.mode) {
		case "background":
			result["background-image"] = url;
			break;
		case "mask": result["mask-image"] = result["-webkit-mask-image"] = url;
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/css/format.js
var format = {
	selectorStart: {
		compressed: "{",
		compact: " {",
		expanded: " {"
	},
	selectorEnd: {
		compressed: "}",
		compact: "; }\n",
		expanded: ";\n}\n"
	},
	rule: {
		compressed: "{key}:",
		compact: " {key}: ",
		expanded: "\n  {key}: "
	}
};
/**
* Format data
*
* Key is selector, value is list of rules
*/
function formatCSS(data, mode = "expanded") {
	const results = [];
	for (let i = 0; i < data.length; i++) {
		const { selector, rules } = data[i];
		let entry = (selector instanceof Array ? selector.join(mode === "compressed" ? "," : ", ") : selector) + format.selectorStart[mode];
		let firstRule = true;
		for (const key in rules) {
			if (!firstRule) entry += ";";
			entry += format.rule[mode].replace("{key}", key) + rules[key];
			firstRule = false;
		}
		entry += format.selectorEnd[mode];
		results.push(entry);
	}
	return results.join(mode === "compressed" ? "" : "\n");
}
//#endregion
//#region node_modules/.pnpm/@iconify+utils@3.1.7/node_modules/@iconify/utils/lib/css/icon.js
/**
* Get CSS for icon, rendered as background or mask
*/
function getIconCSS(icon, options = {}) {
	const body = options.customise ? options.customise(icon.body) : icon.body;
	const mode = options.mode || (options.color || !body.includes("currentColor") ? "background" : "mask");
	let varName = options.varName;
	if (varName === void 0 && mode === "mask") varName = "svg";
	const newOptions = {
		...options,
		mode,
		varName
	};
	if (mode === "background") delete newOptions.varName;
	const rules = Object.create(null);
	Object.assign(rules, options.rules, getCommonCSSRules(newOptions), generateItemCSSRules({
		...defaultIconProps,
		...icon,
		body
	}, newOptions));
	return formatCSS([{
		selector: options.iconSelector || ".icon",
		rules
	}], newOptions.format);
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fnuxt-icon-client-bundle.mjs
var _initialized = false;
function init(addIcon) {
	if (_initialized) return;
	const collections = JSON.parse("[{\"prefix\":\"lucide\",\"icons\":{\"arrow-down\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M12 5v14m7-7l-7 7l-7-7\\\"/>\"},\"arrow-left\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m12 19l-7-7l7-7m7 7H5\\\"/>\"},\"arrow-right\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M5 12h14m-7-7l7 7l-7 7\\\"/>\"},\"arrow-up\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m5 12l7-7l7 7m-7 7V5\\\"/>\"},\"arrow-up-right\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M7 7h10v10M7 17L17 7\\\"/>\"},\"check\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M20 6L9 17l-5-5\\\"/>\"},\"chevron-down\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m6 9l6 6l6-6\\\"/>\"},\"chevron-left\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m15 18l-6-6l6-6\\\"/>\"},\"chevron-right\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m9 18l6-6l-6-6\\\"/>\"},\"chevron-up\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m18 15l-6-6l-6 6\\\"/>\"},\"chevrons-left\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m11 17l-5-5l5-5m7 10l-5-5l5-5\\\"/>\"},\"chevrons-right\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m6 17l5-5l-5-5m7 10l5-5l-5-5\\\"/>\"},\"circle-alert\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"/><path d=\\\"M12 8v4m0 4h.01\\\"/></g>\"},\"circle-check\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"/><path d=\\\"m16 9l-5.5 5.5L8 12\\\"/></g>\"},\"circle-x\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"/><path d=\\\"m15 9l-6 6m0-6l6 6\\\"/></g>\"},\"copy\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><rect width=\\\"14\\\" height=\\\"14\\\" x=\\\"8\\\" y=\\\"8\\\" rx=\\\"2\\\" ry=\\\"2\\\"/><path d=\\\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\\\"/></g>\"},\"copy-check\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><path d=\\\"m12 15l2 2l4-4\\\"/><rect width=\\\"14\\\" height=\\\"14\\\" x=\\\"8\\\" y=\\\"8\\\" rx=\\\"2\\\" ry=\\\"2\\\"/><path d=\\\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\\\"/></g>\"},\"ellipsis\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"1\\\"/><circle cx=\\\"19\\\" cy=\\\"12\\\" r=\\\"1\\\"/><circle cx=\\\"5\\\" cy=\\\"12\\\" r=\\\"1\\\"/></g>\"},\"eye\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><path d=\\\"M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0\\\"/><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"/></g>\"},\"eye-off\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><path d=\\\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242\\\"/><path d=\\\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20\\\"/></g>\"},\"file\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><path d=\\\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\\\"/><path d=\\\"M14 2v5a1 1 0 0 0 1 1h5\\\"/></g>\"},\"folder\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\\\"/>\"},\"folder-open\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2\\\"/>\"},\"grip-vertical\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"9\\\" cy=\\\"12\\\" r=\\\"1\\\"/><circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"1\\\"/><circle cx=\\\"9\\\" cy=\\\"19\\\" r=\\\"1\\\"/><circle cx=\\\"15\\\" cy=\\\"12\\\" r=\\\"1\\\"/><circle cx=\\\"15\\\" cy=\\\"5\\\" r=\\\"1\\\"/><circle cx=\\\"15\\\" cy=\\\"19\\\" r=\\\"1\\\"/></g>\"},\"hash\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M4 9h16M4 15h16M10 3L8 21m8-18l-2 18\\\"/>\"},\"info\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"/><path d=\\\"M12 16v-4m0-4h.01\\\"/></g>\"},\"lightbulb\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4\\\"/>\"},\"loader-circle\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M21 12a9 9 0 1 1-6.219-8.56\\\"/>\"},\"menu\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M4 5h16M4 12h16M4 19h16\\\"/>\"},\"minus\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M5 12h14\\\"/>\"},\"monitor\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><rect width=\\\"20\\\" height=\\\"14\\\" x=\\\"2\\\" y=\\\"3\\\" rx=\\\"2\\\"/><path d=\\\"M8 21h8m-4-4v4\\\"/></g>\"},\"moon\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\\\"/>\"},\"panel-left-close\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><rect width=\\\"18\\\" height=\\\"18\\\" x=\\\"3\\\" y=\\\"3\\\" rx=\\\"2\\\"/><path d=\\\"M9 3v18m7-6l-3-3l3-3\\\"/></g>\"},\"panel-left-open\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><rect width=\\\"18\\\" height=\\\"18\\\" x=\\\"3\\\" y=\\\"3\\\" rx=\\\"2\\\"/><path d=\\\"M9 3v18m5-12l3 3l-3 3\\\"/></g>\"},\"plus\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M5 12h14m-7-7v14\\\"/>\"},\"rotate-ccw\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><path d=\\\"M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8\\\"/><path d=\\\"M3 3v5h5\\\"/></g>\"},\"search\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><path d=\\\"m21 21l-4.34-4.34\\\"/><circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"/></g>\"},\"square\":{\"width\":24,\"height\":24,\"body\":\"<rect width=\\\"18\\\" height=\\\"18\\\" x=\\\"3\\\" y=\\\"3\\\" fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" rx=\\\"2\\\"/>\"},\"star\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z\\\"/>\"},\"sun\":{\"width\":24,\"height\":24,\"body\":\"<g fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\"><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"/><path d=\\\"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\\\"/></g>\"},\"triangle-alert\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01\\\"/>\"},\"upload\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\\"/>\"},\"x\":{\"width\":24,\"height\":24,\"body\":\"<path fill=\\\"none\\\" stroke=\\\"currentColor\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" d=\\\"M18 6L6 18M6 6l12 12\\\"/>\"}}}]");
	for (const collection of collections) for (const [name, data] of Object.entries(collection.icons)) addIcon(collection.prefix ? collection.prefix + ":" + name : name, data);
	_initialized = true;
}
//#endregion
//#region node_modules/.pnpm/@nuxt+icon@2.5.1_magic-string@1.4.3_magicast@0.5.5_rolldown@1.2.12_unplugin@3.4.0_esbui_ce1d212eee5d88dc59c3ccae16dec3e4/node_modules/@nuxt/icon/dist/runtime/components/shared.js
async function loadIcon(name, timeout) {
	if (!name) return null;
	init(addIcon);
	const _icon = getIcon(name);
	if (_icon) return _icon;
	let timeoutWarn;
	const load = loadIcon$1(name).catch(() => {
		console.warn(`[Icon] failed to load icon \`${name}\``);
		return null;
	});
	if (timeout > 0) await Promise.race([load, new Promise((resolve) => {
		timeoutWarn = setTimeout(() => {
			console.warn(`[Icon] loading icon \`${name}\` timed out after ${timeout}ms`);
			resolve();
		}, timeout);
	})]).finally(() => clearTimeout(timeoutWarn));
	else await load;
	return getIcon(name);
}
function useResolvedName(getName) {
	const options = useAppConfig().icon;
	const collections = (options.collections || []).sort((a, b) => b.length - a.length);
	return (0, vue_exports.computed)(() => {
		const name = getName();
		const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
		const resolved = options.aliases?.[bare] || bare;
		if (!resolved.includes(":")) {
			const collection = collections.find((c) => resolved.startsWith(c + "-"));
			return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
		}
		return resolved;
	});
}
function resolveCustomizeFn(customize, globalCustomize) {
	if (customize === false) return void 0;
	if (customize === true || customize === null) return globalCustomize;
	return customize;
}
//#endregion
//#region node_modules/.pnpm/@nuxt+icon@2.5.1_magic-string@1.4.3_magicast@0.5.5_rolldown@1.2.12_unplugin@3.4.0_esbui_ce1d212eee5d88dc59c3ccae16dec3e4/node_modules/@nuxt/icon/dist/runtime/components/css.js
var SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
	return selector.replace(/([^\w-])/g, "\\$1");
}
var NuxtIconCss = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	name: "NuxtIconCss",
	props: {
		name: {
			type: String,
			required: true
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props) {
		const nuxt = useNuxtApp();
		const options = useAppConfig().icon;
		const cssClass = (0, vue_exports.computed)(() => {
			if (!props.name) return "";
			const base = options.cssSelectorPrefix + props.name;
			if (typeof props.customize === "function") return base + "--customized-" + hash(props.customize.toString());
			return base;
		});
		const selector = (0, vue_exports.computed)(() => "." + escapeCssSelector(cssClass.value));
		function getCSS(icon, withLayer = true) {
			let iconSelector = selector.value;
			if (options.cssWherePseudo) iconSelector = `:where(${iconSelector})`;
			const css = getIconCSS(icon, {
				iconSelector,
				format: "compressed",
				customise: resolveCustomizeFn(props.customize, options.customize)
			});
			if (options.cssLayer && withLayer) return `@layer ${options.cssLayer} { ${css} }`;
			return css;
		}
		(0, vue_exports.onServerPrefetch)(async () => {
			if (!(useRuntimeConfig().icon || {})?.serverKnownCssClasses?.includes(cssClass.value)) {
				const icon = await loadIcon(props.name, options.fetchTimeout).catch(() => null);
				if (!icon) return null;
				let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
				if (!ssrCSS) {
					ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
					nuxt.runWithContext(() => {
						useHead$1({ style: [() => {
							const sep = "";
							let css = Array.from(ssrCSS.values()).sort().join(sep);
							if (options.cssLayer) css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
							return { innerHTML: css };
						}] }, { tagPriority: "low" });
					});
				}
				if (cssClass.value && !ssrCSS.has(cssClass.value)) {
					const css = getCSS(icon, false);
					ssrCSS.set(cssClass.value, css);
				}
				return null;
			}
		});
		return () => (0, vue_exports.h)("span", { class: ["iconify", cssClass.value] });
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/utils/debounce-tick.js
/**
* Debounce an async function so that repeated calls within the same tick are
* collapsed into a single call (plus a trailing call if arguments arrived
* while the debounced call was still pending).
*
* Adapted from https://github.com/unjs/perfect-debounce with the timeout
* replaced by Vue's post-flush callback queue.
*/
function debounceTick(fn, options = {}) {
	let leadingValue;
	let active = false;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		const promise = _applyPromised(fn, _this, args);
		currentPromise = promise;
		promise.finally(() => {
			currentPromise = void 0;
			if (trailingArgs && !active) {
				const args = trailingArgs;
				trailingArgs = void 0;
				applyFn(_this, args);
			}
		});
		return promise;
	};
	return function(...args) {
		trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = options.leading && !active;
			if (!active) {
				active = true;
				(0, vue_exports.queuePostFlushCb)(() => {
					active = false;
					const flushArgs = trailingArgs ?? args;
					trailingArgs = void 0;
					const promise = options.leading ? leadingValue : applyFn(this, flushArgs);
					for (const _resolve of resolveList) _resolve(promise);
					resolveList = [];
				});
			}
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}
(0, vue_exports.defineComponent)({
	name: "ServerPlaceholder",
	render() {
		return (0, vue_exports.createElementBlock)("div");
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/client-only.js
var clientOnlySymbol = Symbol.for("nuxt:client-only");
(0, vue_exports.defineComponent)({
	name: "ClientOnly",
	inheritAttrs: false,
	props: [
		"fallback",
		"placeholder",
		"placeholderTag",
		"fallbackTag"
	],
	setup(props, { slots, attrs }) {
		const mounted = (0, vue_exports.shallowRef)(false);
		const vm = (0, vue_exports.getCurrentInstance)();
		if (vm) vm._nuxtClientOnly = true;
		(0, vue_exports.provide)(clientOnlySymbol, true);
		return () => {
			if (mounted.value) {
				const vnodes = slots.default?.();
				if (vnodes && vnodes.length === 1) return [(0, vue_exports.cloneVNode)(vnodes[0], attrs)];
				return vnodes;
			}
			const slot = slots.fallback || slots.placeholder;
			if (slot) return (0, vue_exports.h)(slot);
			const fallbackStr = props.fallback || props.placeholder || "";
			const fallbackTag = sanitizeTag(props.fallbackTag || props.placeholderTag, "span");
			return (0, vue_exports.createElementBlock)(fallbackTag, attrs, fallbackStr);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/compiler/runtime/index.js
/**
* Define a factory for a function that should be registered for automatic key injection.
* @since 4.2.0
* @param factory
*/
function defineKeyedFunctionFactory(factory) {
	const placeholder = function() {
		throw appDiagnostics.NUXT_E1007({ name: factory.name });
	};
	return Object.defineProperty(placeholder, "__nuxt_factory", {
		enumerable: false,
		get: () => factory.factory
	});
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/diagnostics/data.js
/**
* E3xxx
* Data fetching (useFetch / useAsyncData) runtime diagnostics.
*/
var dataDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/composables/asyncData.js
var createUseAsyncData = defineKeyedFunctionFactory({
	name: "createUseAsyncData",
	factory(options = {}) {
		function useAsyncData(...args) {
			const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
			if (_isAutoKeyNeeded(args[0], args[1])) args.unshift(autoKey);
			let [_key, _handler, opts = {}] = args;
			const key = (0, vue_exports.isRef)(_key) || typeof _key === "function" ? (0, vue_exports.computed)(() => (0, vue_exports.toValue)(_key)) : { value: _key };
			if (!key.value || typeof key.value !== "string") throw dataDiagnostics.NUXT_E3008();
			if (typeof _handler !== "function") throw dataDiagnostics.NUXT_E3009();
			const shouldFactoryOptionsOverride = typeof options === "function";
			const nuxtApp = useNuxtApp();
			const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
			if (!shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				if (opts[key] !== void 0) continue;
				opts[key] = factoryOptions[key];
			}
			opts.server ??= true;
			opts.default ??= getDefault;
			opts.getCachedData ??= getDefaultCachedData;
			opts.lazy ??= false;
			opts.immediate ??= true;
			opts.deep ??= asyncDataDefaults.deep;
			opts.dedupe ??= "cancel";
			opts.enabled ??= true;
			if (shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				opts[key] = factoryOptions[key];
			}
			nuxtApp._asyncData[key.value];
			function createInitialFetch() {
				const initialFetchOptions = {
					cause: "initial",
					dedupe: opts.dedupe
				};
				const existing = nuxtApp._asyncData[key.value];
				if (!existing?._init) {
					initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
					nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
					nuxtApp._asyncData[key.value]._initialCachedData = initialFetchOptions.cachedData;
				} else if (nuxtApp._asyncDataPromises[key.value]) initialFetchOptions.cachedData = existing._initialCachedData;
				return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
			}
			const initialFetch = createInitialFetch();
			const asyncData = nuxtApp._asyncData[key.value];
			asyncData._deps++;
			if (opts.server !== false && nuxtApp.payload.serverRendered && opts.immediate) {
				const promise = initialFetch();
				if ((0, vue_exports.getCurrentInstance)()) (0, vue_exports.onServerPrefetch)(() => promise);
				else nuxtApp.hook("app:created", async () => {
					await promise;
				});
			}
			const asyncReturn = {
				data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
				pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
				status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
				error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
				refresh: (...args) => {
					if (!nuxtApp._asyncData[key.value]?._init) return createInitialFetch()();
					return nuxtApp._asyncData[key.value].execute(...args);
				},
				execute: (...args) => asyncReturn.refresh(...args),
				clear: () => {
					const entry = nuxtApp._asyncData[key.value];
					if (entry?._abortController) try {
						entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
					} finally {
						entry._abortController = void 0;
					}
					clearNuxtDataByKey(nuxtApp, key.value);
				}
			};
			const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
			Object.assign(asyncDataPromise, asyncReturn);
			Object.defineProperties(asyncDataPromise, {
				then: {
					enumerable: true,
					value: asyncDataPromise.then.bind(asyncDataPromise)
				},
				catch: {
					enumerable: true,
					value: asyncDataPromise.catch.bind(asyncDataPromise)
				},
				finally: {
					enumerable: true,
					value: asyncDataPromise.finally.bind(asyncDataPromise)
				}
			});
			return asyncDataPromise;
		}
		return useAsyncData;
	}
});
var useAsyncData = createUseAsyncData.__nuxt_factory();
createUseAsyncData.__nuxt_factory({
	lazy: true,
	_functionName: "useLazyAsyncData"
});
function writableComputedRef(getter) {
	return (0, vue_exports.computed)({
		get() {
			return getter()?.value;
		},
		set(value) {
			const ref = getter();
			if (ref) ref.value = value;
		}
	});
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
	if (typeof keyOrFetcher === "string") return false;
	if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) return false;
	if (typeof keyOrFetcher === "function" && typeof fetcher === "function") return false;
	return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
	delete nuxtApp.payload.data[key];
	delete nuxtApp.payload._errors[key];
	if (nuxtApp._asyncData[key]) {
		nuxtApp._asyncData[key].data.value = (0, vue_exports.unref)(nuxtApp._asyncData[key]._default());
		nuxtApp._asyncData[key].error.value = void 0;
		nuxtApp._asyncData[key].status.value = "idle";
		nuxtApp._asyncData[key]._initialCachedData = void 0;
	}
	delete nuxtApp._asyncDataPromises[key];
}
function pick(obj, keys) {
	const newObj = {};
	for (const key of keys) newObj[key] = obj[key];
	return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
	nuxtApp.payload._errors[key] ??= void 0;
	const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
	const handler = !import.meta.prerender || !nuxtApp.ssrContext?.["~sharedPrerenderCache"] ? _handler : (nuxtApp, options) => {
		const value = nuxtApp.ssrContext["~sharedPrerenderCache"].get(key);
		if (value) return value;
		const promise = Promise.resolve().then(() => nuxtApp.runWithContext(() => _handler(nuxtApp, options)));
		nuxtApp.ssrContext["~sharedPrerenderCache"].set(key, promise);
		return promise;
	};
	const _ref = options.deep ? vue_exports.ref : vue_exports.shallowRef;
	const hasCachedData = initialCachedData !== void 0;
	const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
		if (!keys || keys.includes(key)) await asyncData.execute({ cause: "refresh:hook" });
	});
	const asyncData = {
		data: _ref(hasCachedData ? initialCachedData : options.default()),
		pending: (0, vue_exports.computed)(() => asyncData.status.value === "pending"),
		error: (0, vue_exports.toRef)(nuxtApp.payload._errors, key),
		status: (0, vue_exports.shallowRef)("idle"),
		execute: (...args) => {
			const [_opts, newValue = void 0] = args;
			const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
			if (nuxtApp._asyncDataPromises[key]) {
				if ((opts.dedupe ?? options.dedupe) === "defer") return nuxtApp._asyncDataPromises[key];
			}
			{
				const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
				if (cachedData !== void 0) {
					nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
					asyncData.error.value = void 0;
					asyncData.status.value = "success";
					return Promise.resolve(cachedData);
				}
			}
			if ((0, vue_exports.toValue)(options.enabled) === false) return Promise.resolve(asyncData.data.value);
			if (asyncData._abortController) asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
			asyncData._abortController = new AbortController();
			asyncData.status.value = "pending";
			const cleanupController = new AbortController();
			const promise = new Promise((resolve, reject) => {
				try {
					const timeout = opts.timeout ?? options.timeout;
					const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
					if (mergedSignal.aborted) {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
						return;
					}
					mergedSignal.addEventListener("abort", () => {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
					}, {
						once: true,
						signal: cleanupController.signal
					});
					return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
				} catch (err) {
					reject(err);
				}
			}).then(async (_result) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return;
				let result = _result;
				if (options.transform) result = await options.transform(_result);
				if (options.pick) result = pick(result, options.pick);
				nuxtApp.payload.data[key] = result;
				asyncData.data.value = result;
				asyncData.error.value = void 0;
				asyncData.status.value = "success";
			}).catch((error) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return nuxtApp._asyncDataPromises[key];
				if (asyncData._abortController?.signal.aborted) return nuxtApp._asyncDataPromises[key];
				if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
					asyncData.status.value = "idle";
					return nuxtApp._asyncDataPromises[key];
				}
				asyncData.error.value = createError$1(error);
				asyncData.data.value = (0, vue_exports.unref)(options.default());
				asyncData.status.value = "error";
			}).finally(() => {
				cleanupController.abort();
				if (nuxtApp._asyncDataPromises[key] === promise) delete nuxtApp._asyncDataPromises[key];
			});
			nuxtApp._asyncDataPromises[key] = promise;
			return nuxtApp._asyncDataPromises[key];
		},
		_execute: debounceTick((...args) => asyncData.execute(...args)),
		_default: options.default,
		_deps: 0,
		_init: true,
		_hash: void 0,
		_off: () => {
			unsubRefreshAsyncData();
			if (nuxtApp._asyncData[key]?._init) nuxtApp._asyncData[key]._init = false;
			if (nuxtApp._asyncDataPromises[key]) {
				asyncData._abortController?.abort(new DOMException("AsyncData request cancelled by unmount", "AbortError"));
				delete nuxtApp._asyncDataPromises[key];
				if (asyncData.status.value === "pending") asyncData.status.value = "idle";
			}
			if (!hasCustomGetCachedData) (0, vue_exports.nextTick)(() => {
				if (!nuxtApp._asyncData[key]?._init) {
					clearNuxtDataByKey(nuxtApp, key);
					asyncData.execute = () => Promise.resolve();
				}
			});
		}
	};
	return asyncData;
}
var getDefault = () => void 0;
var getDefaultCachedData = (key, nuxtApp, ctx) => {
	if (nuxtApp.isHydrating) return nuxtApp.payload.data[key];
	if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") return nuxtApp.static.data[key];
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
	const list = signals.filter((s) => !!s);
	if (typeof timeout === "number" && timeout >= 0) {
		const timeoutSignal = AbortSignal.timeout?.(timeout);
		if (timeoutSignal) list.push(timeoutSignal);
	}
	if (AbortSignal.any) return AbortSignal.any(list);
	const controller = new AbortController();
	for (const sig of list) if (sig.aborted) {
		const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
		return controller.signal;
	}
	const onAbort = () => {
		const reason = list.find((s) => s.aborted)?.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
	};
	for (const sig of list) sig.addEventListener?.("abort", onAbort, {
		once: true,
		signal: cleanupSignal
	});
	return controller.signal;
}
//#endregion
//#region node_modules/.pnpm/@nuxt+icon@2.5.1_magic-string@1.4.3_magicast@0.5.5_rolldown@1.2.12_unplugin@3.4.0_esbui_ce1d212eee5d88dc59c3ccae16dec3e4/node_modules/@nuxt/icon/dist/runtime/components/svg.js
var NuxtIconSvg = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	name: "NuxtIconSvg",
	props: {
		name: {
			type: String,
			required: true
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props, { slots }) {
		useNuxtApp();
		const options = useAppConfig().icon;
		const name = useResolvedName(() => props.name);
		const storeKey = "i-" + name.value;
		if (name.value) (0, vue_exports.onServerPrefetch)(async () => {
			await useAsyncData(storeKey, async () => await loadIcon(name.value, options.fetchTimeout), { deep: false });
		});
		return () => (0, vue_exports.h)(Icon, {
			icon: name.value,
			ssr: true,
			customise: resolveCustomizeFn(props.customize, options.customize)
		}, slots);
	}
});
//#endregion
//#region node_modules/.pnpm/@nuxt+icon@2.5.1_magic-string@1.4.3_magicast@0.5.5_rolldown@1.2.12_unplugin@3.4.0_esbui_ce1d212eee5d88dc59c3ccae16dec3e4/node_modules/@nuxt/icon/dist/runtime/components/index.js
var components_exports = /* @__PURE__ */ __exportAll({ default: () => components_default });
var components_default = (0, vue_exports.defineComponent)({
	name: "NuxtIcon",
	props: {
		name: {
			type: String,
			required: true
		},
		mode: {
			type: String,
			required: false,
			default: null
		},
		size: {
			type: [Number, String],
			required: false,
			default: null
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props, { slots }) {
		const nuxtApp = useNuxtApp();
		const runtimeOptions = useAppConfig().icon;
		const name = useResolvedName(() => props.name);
		const component = (0, vue_exports.computed)(() => nuxtApp.vueApp?.component(name.value) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss));
		const style = (0, vue_exports.computed)(() => {
			const size = props.size || runtimeOptions.size;
			return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
		});
		return () => (0, vue_exports.h)(component.value, {
			...runtimeOptions.attrs,
			name: name.value,
			class: runtimeOptions.class,
			style: style.value,
			customize: props.customize
		}, slots);
	}
});
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Icon.vue
var _sfc_main$13 = {
	__name: "UIcon",
	__ssrInlineRender: true,
	props: {
		name: {
			type: null,
			required: true
		},
		mode: {
			type: String,
			required: false
		},
		size: {
			type: [String, Number],
			required: false
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			required: false
		}
	},
	setup(__props) {
		const iconProps = useForwardProps$1(reactivePick(__props, "mode", "size", "customize"));
		return (_ctx, _push, _parent, _attrs) => {
			if (typeof __props.name === "string") _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(components_default), (0, vue_exports.mergeProps)({ name: __props.name }, (0, vue_exports.unref)(iconProps), _attrs), null, _parent));
			else (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(__props.name), _attrs, null), _parent);
		};
	}
};
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Icon.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useAvatarGroup.js
var avatarGroupInjectionKey = Symbol("nuxt-ui.avatar-group");
function useAvatarGroup(props) {
	const avatarGroup = (0, vue_exports.inject)(avatarGroupInjectionKey, void 0);
	const size = (0, vue_exports.computed)(() => props.size ?? avatarGroup?.value.size);
	const color = (0, vue_exports.computed)(() => props.color ?? avatarGroup?.value.color);
	(0, vue_exports.provide)(avatarGroupInjectionKey, (0, vue_exports.computed)(() => ({
		size: size.value,
		color: color.value
	})));
	return {
		size,
		color
	};
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Fchip.ts
var virtual_nuxt__nuxt_2Fui_2Fchip_default = {
	"slots": {
		"root": "relative inline-flex items-center justify-center shrink-0",
		"base": "rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap"
	},
	"variants": {
		"color": {
			"primary": "bg-primary",
			"secondary": "bg-secondary",
			"success": "bg-success",
			"info": "bg-info",
			"warning": "bg-warning",
			"error": "bg-error",
			"neutral": "bg-inverted"
		},
		"size": {
			"3xs": "h-[4px] min-w-[4px] text-[4px]",
			"2xs": "h-[5px] min-w-[5px] text-[5px]",
			"xs": "h-[6px] min-w-[6px] text-[6px]",
			"sm": "h-[7px] min-w-[7px] text-[7px]",
			"md": "h-[8px] min-w-[8px] text-[8px]",
			"lg": "h-[9px] min-w-[9px] text-[9px]",
			"xl": "h-[10px] min-w-[10px] text-[10px]",
			"2xl": "h-[11px] min-w-[11px] text-[11px]",
			"3xl": "h-[12px] min-w-[12px] text-[12px]"
		},
		"position": {
			"top-right": "top-0 right-0",
			"bottom-right": "bottom-0 right-0",
			"top-left": "top-0 left-0",
			"bottom-left": "bottom-0 left-0"
		},
		"inset": { "false": "" },
		"standalone": { "false": "absolute" }
	},
	"compoundVariants": [
		{
			"position": "top-right",
			"inset": false,
			"class": "-translate-y-1/2 translate-x-1/2 transform"
		},
		{
			"position": "bottom-right",
			"inset": false,
			"class": "translate-y-1/2 translate-x-1/2 transform"
		},
		{
			"position": "top-left",
			"inset": false,
			"class": "-translate-y-1/2 -translate-x-1/2 transform"
		},
		{
			"position": "bottom-left",
			"inset": false,
			"class": "translate-y-1/2 -translate-x-1/2 transform"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"position": "top-right"
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Chip.vue
var _sfc_main$12 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UChip",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ (0, vue_exports.mergeModels)({
		as: {
			type: null,
			required: false
		},
		text: {
			type: [String, Number],
			required: false
		},
		color: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		position: {
			type: null,
			required: false
		},
		inset: {
			type: Boolean,
			required: false,
			default: false
		},
		standalone: {
			type: Boolean,
			required: false,
			default: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	}, {
		"show": {
			type: Boolean,
			default: true
		},
		"showModifiers": {}
	}),
	emits: ["update:show"],
	setup(__props) {
		const _props = __props;
		const props = useComponentProps("chip", _props);
		const show = (0, vue_exports.useModel)(__props, "show", {
			type: Boolean,
			default: true
		});
		const { size } = useAvatarGroup(_props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Fchip_default,
			...appConfig.ui?.chip || {}
		})({
			color: props.color,
			size: size.value ?? props.size,
			position: props.position,
			inset: props.inset,
			standalone: props.standalone
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Slot), {
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent, _scopeId));
						if (show.value) {
							_push(`<span data-slot="base" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.base({ class: (0, vue_exports.unref)(props).ui?.base }))}"${_scopeId}>`);
							(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "content", {}, () => {
								_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).text)}`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Slot), {
						..._ctx.$attrs,
						"data-slot": void 0
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
						_: 3
					}, 16), show.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
						key: 0,
						"data-slot": "base",
						class: ui.value.base({ class: (0, vue_exports.unref)(props).ui?.base })
					}, [(0, vue_exports.renderSlot)(_ctx.$slots, "content", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).text), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Chip.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Favatar.ts
var virtual_nuxt__nuxt_2Fui_2Favatar_default = {
	"slots": {
		"root": "inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle",
		"image": "h-full w-full rounded-[inherit] object-cover",
		"fallback": "font-medium truncate",
		"icon": "shrink-0"
	},
	"variants": {
		"color": {
			"primary": {
				"root": "bg-primary/10",
				"fallback": "text-primary",
				"icon": "text-primary"
			},
			"secondary": {
				"root": "bg-secondary/10",
				"fallback": "text-secondary",
				"icon": "text-secondary"
			},
			"success": {
				"root": "bg-success/10",
				"fallback": "text-success",
				"icon": "text-success"
			},
			"info": {
				"root": "bg-info/10",
				"fallback": "text-info",
				"icon": "text-info"
			},
			"warning": {
				"root": "bg-warning/10",
				"fallback": "text-warning",
				"icon": "text-warning"
			},
			"error": {
				"root": "bg-error/10",
				"fallback": "text-error",
				"icon": "text-error"
			},
			"neutral": {
				"root": "bg-elevated",
				"fallback": "text-muted",
				"icon": "text-muted"
			}
		},
		"size": {
			"3xs": { "root": "size-4 text-[8px]" },
			"2xs": { "root": "size-5 text-[10px]" },
			"xs": { "root": "size-6 text-xs" },
			"sm": { "root": "size-7 text-sm" },
			"md": { "root": "size-8 text-base" },
			"lg": { "root": "size-9 text-lg" },
			"xl": { "root": "size-10 text-xl" },
			"2xl": { "root": "size-11 text-[22px]" },
			"3xl": { "root": "size-12 text-2xl" }
		}
	},
	"defaultVariants": {
		"size": "md",
		"color": "neutral"
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue
var _sfc_main$11 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UAvatar",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		src: {
			type: String,
			required: false
		},
		alt: {
			type: String,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		text: {
			type: String,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		chip: {
			type: [Boolean, Object],
			required: false
		},
		class: {
			type: null,
			required: false
		},
		style: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const _props = __props;
		const props = useComponentProps("avatar", _props);
		const as = (0, vue_exports.computed)(() => {
			if (typeof props.as === "string" || typeof props.as?.render === "function") return { root: props.as };
			return defu$1(props.as, { root: "span" });
		});
		const fallback = (0, vue_exports.computed)(() => props.text || (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2));
		const appConfig = useAppConfig();
		const { size, color } = useAvatarGroup(_props);
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Favatar_default,
			...appConfig.ui?.avatar || {}
		})({
			size: size.value ?? props.size,
			color: color.value ?? props.color
		}));
		const rootClass = (0, vue_exports.computed)(() => ui.value.root({ class: [props.ui?.root, props.class] }));
		const sizePx = (0, vue_exports.computed)(() => {
			const sizeClass = (rootClass.value || "").split(" ").find((c) => /^size-\d+$/.test(c));
			if (sizeClass) {
				const num = Number.parseFloat(sizeClass.split("-")[1] ?? "");
				if (!Number.isNaN(num)) return num * 4;
			}
			return null;
		});
		const error = (0, vue_exports.ref)(false);
		(0, vue_exports.watch)(() => props.src, () => {
			if (error.value) error.value = false;
		});
		function onError() {
			error.value = true;
		}
		return (_ctx, _push, _parent, _attrs) => {
			(0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).chip ? _sfc_main$12 : (0, vue_exports.unref)(Primitive)), (0, vue_exports.mergeProps)({ as: as.value.root }, (0, vue_exports.unref)(props).chip ? typeof (0, vue_exports.unref)(props).chip === "object" ? {
				inset: true,
				...(0, vue_exports.unref)(props).chip
			} : { inset: true } : {}, {
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: rootClass.value,
				style: (0, vue_exports.unref)(props).style
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(props).src && !error.value) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(as.value.img || (0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
							src: (0, vue_exports.unref)(props).src,
							alt: (0, vue_exports.unref)(props).alt,
							width: sizePx.value,
							height: sizePx.value
						}, _ctx.$attrs, {
							"data-slot": "image",
							class: ui.value.image({ class: (0, vue_exports.unref)(props).ui?.image }),
							onError
						}), null), _parent, _scopeId);
						else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Slot), {
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, () => {
									if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$13, {
										name: (0, vue_exports.unref)(props).icon,
										"data-slot": "icon",
										class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
									}, null, _parent, _scopeId));
									else _push(`<span data-slot="fallback" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.fallback({ class: (0, vue_exports.unref)(props).ui?.fallback }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(fallback.value || "\xA0")}</span>`);
								}, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, () => [(0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
									key: 0,
									name: (0, vue_exports.unref)(props).icon,
									"data-slot": "icon",
									class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
								}, null, 8, ["name", "class"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 1,
									"data-slot": "fallback",
									class: ui.value.fallback({ class: (0, vue_exports.unref)(props).ui?.fallback })
								}, (0, vue_exports.toDisplayString)(fallback.value || "\xA0"), 3))])];
							}),
							_: 3
						}, _parent, _scopeId));
					} else return [(0, vue_exports.unref)(props).src && !error.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)(as.value.img || (0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
						key: 0,
						src: (0, vue_exports.unref)(props).src,
						alt: (0, vue_exports.unref)(props).alt,
						width: sizePx.value,
						height: sizePx.value
					}, _ctx.$attrs, {
						"data-slot": "image",
						class: ui.value.image({ class: (0, vue_exports.unref)(props).ui?.image }),
						onError
					}), null, 16, [
						"src",
						"alt",
						"width",
						"height",
						"class"
					])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Slot), (0, vue_exports.mergeProps)({ key: 1 }, {
						..._ctx.$attrs,
						"data-slot": void 0
					}), {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, () => [(0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
							key: 0,
							name: (0, vue_exports.unref)(props).icon,
							"data-slot": "icon",
							class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
						}, null, 8, ["name", "class"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
							key: 1,
							"data-slot": "fallback",
							class: ui.value.fallback({ class: (0, vue_exports.unref)(props).ui?.fallback })
						}, (0, vue_exports.toDisplayString)(fallback.value || "\xA0"), 3))])]),
						_: 3
					}, 16))];
				}),
				_: 3
			}), _parent);
		};
	}
});
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useComponentIcons.js
function useComponentIcons(componentProps) {
	const appConfig = useAppConfig();
	const props = (0, vue_exports.computed)(() => (0, vue_exports.toValue)(componentProps));
	const isLeading = (0, vue_exports.computed)(() => props.value.icon && props.value.leading || props.value.icon && !props.value.trailing || props.value.loading && !props.value.trailing || !!props.value.leadingIcon);
	return {
		isLeading,
		isTrailing: (0, vue_exports.computed)(() => props.value.icon && props.value.trailing || props.value.loading && props.value.trailing || !!props.value.trailingIcon && props.value.trailing !== false),
		leadingIconName: (0, vue_exports.computed)(() => {
			if (props.value.loading) return props.value.loadingIcon || appConfig.ui.icons.loading;
			return props.value.leadingIcon || props.value.icon;
		}),
		trailingIconName: (0, vue_exports.computed)(() => {
			if (props.value.loading && !isLeading.value) return props.value.loadingIcon || appConfig.ui.icons.loading;
			return props.value.trailingIcon || props.value.icon;
		})
	};
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useFieldGroup.js
var fieldGroupInjectionKey = Symbol("nuxt-ui.field-group");
function useFieldGroup(props) {
	const fieldGroup = (0, vue_exports.inject)(fieldGroupInjectionKey, void 0);
	return {
		orientation: (0, vue_exports.computed)(() => fieldGroup?.value.orientation),
		size: (0, vue_exports.computed)(() => props?.size ?? fieldGroup?.value.size)
	};
}
(0, vue_exports.defineComponent)({
	name: "FieldGroupReset",
	setup(_, { slots }) {
		(0, vue_exports.provide)(fieldGroupInjectionKey, (0, vue_exports.computed)(() => ({
			size: void 0,
			orientation: void 0
		})));
		return () => slots.default?.();
	}
});
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useFormField.js
var formLoadingInjectionKey = Symbol("nuxt-ui.form-loading");
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/utils/link-keys.js
var linkKeys = [
	"active",
	"activeClass",
	"ariaCurrentValue",
	"as",
	"disabled",
	"download",
	"exact",
	"exactActiveClass",
	"exactHash",
	"exactQuery",
	"external",
	"form",
	"formaction",
	"formenctype",
	"formmethod",
	"formnovalidate",
	"formtarget",
	"href",
	"hreflang",
	"inactiveClass",
	"locale",
	"media",
	"noPrefetch",
	"noRel",
	"onClick",
	"ping",
	"prefetch",
	"prefetchOn",
	"prefetchedClass",
	"referrerpolicy",
	"rel",
	"replace",
	"target",
	"title",
	"to",
	"trailingSlash",
	"type",
	"viewTransition"
];
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/utils/link.js
function pickLinkProps(link) {
	const keys = Object.keys(link);
	const ariaKeys = keys.filter((key) => key.startsWith("aria-"));
	const dataKeys = keys.filter((key) => key.startsWith("data-"));
	return reactivePick(link, ...[
		...linkKeys,
		...ariaKeys,
		...dataKeys
	]);
}
function isPartiallyEqual(item1, item2) {
	const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
		if (q.type === "added") filtered.add(q.key);
		return filtered;
	}, /* @__PURE__ */ new Set());
	return isEqual$2(Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key))), Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key))));
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/nuxt-link.js
var firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
/**
* Reject URL strings that would resolve to a script-capable protocol when used as the
* `href` of an anchor element. Returns the value unchanged when safe, or `null`.
*
* The denylist is delegated to `ufo`'s `isScriptProtocol` so it stays in sync with the
* check used by `navigateTo` (currently `javascript:`, `data:`, `vbscript:`, `blob:`).
* ASCII whitespace and control characters are stripped first because browser URL
* parsers tolerate them before the scheme, and `view-source:` is peeled recursively
* because Chromium resolves it transparently to the inner URL.
*/
function sanitizeExternalHref(value) {
	let candidate = value.replace(/[\u0000-\u001F\s]+/g, "");
	while (candidate.toLowerCase().startsWith("view-source:")) candidate = candidate.slice(12);
	const colon = candidate.indexOf(":");
	if (colon > 0 && isScriptProtocol(candidate.slice(0, colon + 1))) return null;
	return value;
}
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtLink(options) {
	const componentName = options.componentName || "NuxtLink";
	function isHashLinkWithoutHashMode(link) {
		return typeof link === "string" && link.startsWith("#");
	}
	function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
		const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
		if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") return to;
		if (typeof to === "string") return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
		const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
		return {
			...to,
			name: void 0,
			path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
		};
	}
	function useNuxtLink(props) {
		const router = useRouter();
		const config = /* @__PURE__ */ useRuntimeConfig();
		const hasTarget = (0, vue_exports.computed)(() => !!(0, vue_exports.unref)(props.target) && (0, vue_exports.unref)(props.target) !== "_self");
		const isAbsoluteUrl = (0, vue_exports.computed)(() => {
			const path = (0, vue_exports.unref)(props.to) || (0, vue_exports.unref)(props.href) || "";
			return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
		});
		const builtinRouterLink = (0, vue_exports.resolveComponent)("RouterLink");
		const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
		const isExternal = (0, vue_exports.computed)(() => {
			if ((0, vue_exports.unref)(props.external)) return true;
			const path = (0, vue_exports.unref)(props.to) || (0, vue_exports.unref)(props.href) || "";
			if (typeof path === "object") return false;
			return path === "" || isAbsoluteUrl.value;
		});
		const to = (0, vue_exports.computed)(() => {
			const path = (0, vue_exports.unref)(props.to) || (0, vue_exports.unref)(props.href) || "";
			if (isExternal.value) return path;
			return resolveTrailingSlashBehavior(path, router.resolve, (0, vue_exports.unref)(props.trailingSlash));
		});
		const link = isExternal.value ? void 0 : useBuiltinLink?.({
			...props,
			to,
			viewTransition: (0, vue_exports.unref)(props.viewTransition)
		});
		const href = (0, vue_exports.computed)(() => {
			const effectiveTrailingSlash = (0, vue_exports.unref)(props.trailingSlash) ?? options.trailingSlash;
			if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
				const raw = to.value;
				return typeof raw === "string" ? sanitizeExternalHref(raw) : raw;
			}
			if (isExternal.value) {
				const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
				const href = typeof path === "object" ? router.resolve(path).href : path;
				const safe = typeof href === "string" ? sanitizeExternalHref(href) : href;
				return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
			}
			if (typeof to.value === "object") return router.resolve(to.value)?.href ?? null;
			return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
		});
		return {
			to,
			hasTarget,
			isAbsoluteUrl,
			isExternal,
			href,
			isActive: link?.isActive ?? (0, vue_exports.computed)(() => to.value === router.currentRoute.value.path),
			isExactActive: link?.isExactActive ?? (0, vue_exports.computed)(() => to.value === router.currentRoute.value.path),
			route: link?.route ?? (0, vue_exports.computed)(() => router.resolve(to.value)),
			async navigate(_e) {
				if (href.value === null) return;
				await navigateTo(href.value, {
					replace: (0, vue_exports.unref)(props.replace),
					external: isExternal.value || hasTarget.value
				});
			}
		};
	}
	return (0, vue_exports.defineComponent)({
		name: componentName,
		props: {
			to: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			href: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			target: {
				type: String,
				default: void 0,
				required: false
			},
			rel: {
				type: String,
				default: void 0,
				required: false
			},
			noRel: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetchOn: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			noPrefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			activeClass: {
				type: String,
				default: void 0,
				required: false
			},
			exactActiveClass: {
				type: String,
				default: void 0,
				required: false
			},
			prefetchedClass: {
				type: String,
				default: void 0,
				required: false
			},
			replace: {
				type: Boolean,
				default: void 0,
				required: false
			},
			ariaCurrentValue: {
				type: String,
				default: void 0,
				required: false
			},
			external: {
				type: Boolean,
				default: void 0,
				required: false
			},
			custom: {
				type: Boolean,
				default: void 0,
				required: false
			},
			trailingSlash: {
				type: String,
				default: void 0,
				required: false
			}
		},
		useLink: useNuxtLink,
		setup(props, { slots }) {
			const router = useRouter();
			const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
			const prefetched = (0, vue_exports.shallowRef)(false);
			const el = void 0;
			const elRef = void 0;
			function shouldPrefetch(mode) {
				return false;
			}
			async function prefetch(nuxtApp = useNuxtApp()) {}
			return () => {
				const target = props.target || null;
				const rel = firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : "") || null;
				const getCustomSlotProps = (routerLinkSlotProps) => ({
					href: href.value,
					navigate,
					get route() {
						if (!href.value) return;
						const url = new URL(href.value, "http://localhost");
						return {
							path: url.pathname,
							fullPath: url.pathname,
							get query() {
								return parseQuery(url.search);
							},
							hash: url.hash,
							params: {},
							name: void 0,
							matched: [],
							redirectedFrom: void 0,
							meta: {},
							href: href.value
						};
					},
					rel,
					target,
					isExternal: isExternal.value || hasTarget.value,
					isActive: false,
					isExactActive: false,
					...routerLinkSlotProps,
					prefetch,
					prefetched: prefetched.value,
					shouldPrefetch
				});
				if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
					const routerLinkProps = {
						ref: elRef,
						to: to.value,
						activeClass: props.activeClass || options.activeClass,
						exactActiveClass: props.exactActiveClass || options.exactActiveClass,
						replace: props.replace,
						ariaCurrentValue: props.ariaCurrentValue,
						custom: props.custom
					};
					if (!props.custom) routerLinkProps.rel = props.rel || void 0;
					return (0, vue_exports.h)((0, vue_exports.resolveComponent)("RouterLink"), routerLinkProps, props.custom && slots.default ? { default: (slotProps) => slots.default(getCustomSlotProps(slotProps)) } : slots.default);
				}
				if (props.custom) {
					if (!slots.default) return null;
					return slots.default(getCustomSlotProps());
				}
				return (0, vue_exports.h)("a", {
					ref: el,
					href: href.value || null,
					rel,
					target,
					onClick: async (event) => {
						if (isExternal.value || hasTarget.value) return;
						event.preventDefault();
						try {
							const encodedHref = encodeRoutePath(href.value ?? "");
							return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
						} finally {}
					}
				}, slots.default?.());
			};
		}
	});
}
var NuxtLink = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
	if (trailingSlash !== "append" && trailingSlash !== "remove") return to;
	const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
	if (hasProtocol(to) && !to.startsWith("http")) return to;
	return normalizeFn(to, true);
}
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue
var _sfc_main$10 = {
	__name: "ULinkBase",
	__ssrInlineRender: true,
	props: {
		as: {
			type: String,
			required: false,
			default: "button"
		},
		type: {
			type: String,
			required: false,
			default: "button"
		},
		disabled: {
			type: Boolean,
			required: false
		},
		onClick: {
			type: [Function, Array],
			required: false
		},
		href: {
			type: [String, null],
			required: false
		},
		navigate: {
			type: Function,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		rel: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		active: {
			type: Boolean,
			required: false
		},
		isExternal: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		function onClickWrapper(e) {
			if (props.disabled) {
				e.stopPropagation();
				e.preventDefault();
				return;
			}
			const results = [];
			if (props.onClick) for (const onClick of Array.isArray(props.onClick) ? props.onClick : [props.onClick]) results.push(onClick(e));
			if (props.href && props.navigate && !props.isExternal) props.navigate(e);
			return Promise.all(results);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)(__props.href ? {
				"as": "a",
				"href": __props.disabled ? void 0 : __props.href,
				"aria-disabled": __props.disabled ? "true" : void 0,
				"role": __props.disabled ? "link" : void 0,
				"tabindex": __props.disabled ? -1 : void 0
			} : __props.as === "button" ? {
				as: __props.as,
				type: __props.type,
				disabled: __props.disabled
			} : { as: __props.as }, {
				rel: __props.rel,
				target: __props.target,
				onClick: onClickWrapper
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Flink.ts
var virtual_nuxt__nuxt_2Fui_2Flink_default = {
	"base": "outline-primary/25 focus-visible:outline-3 rounded-md",
	"variants": {
		"active": {
			"true": "text-primary",
			"false": "text-muted"
		},
		"disabled": { "true": "cursor-not-allowed opacity-75" }
	},
	"compoundVariants": [{
		"active": false,
		"disabled": false,
		"class": ["hover:text-default", "transition-colors"]
	}]
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Link.vue
var _sfc_main$9 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "ULink",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "button"
		},
		type: {
			type: null,
			required: false,
			default: "button"
		},
		disabled: {
			type: Boolean,
			required: false
		},
		active: {
			type: Boolean,
			required: false,
			default: void 0
		},
		exact: {
			type: Boolean,
			required: false
		},
		exactQuery: {
			type: [Boolean, String],
			required: false
		},
		exactHash: {
			type: Boolean,
			required: false
		},
		inactiveClass: {
			type: String,
			required: false
		},
		custom: {
			type: Boolean,
			required: false
		},
		raw: {
			type: Boolean,
			required: false
		},
		locale: {
			type: [Boolean, String],
			required: false,
			default: void 0
		},
		class: {
			type: null,
			required: false
		},
		to: {
			type: null,
			required: false
		},
		href: {
			type: null,
			required: false
		},
		external: {
			type: Boolean,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		rel: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		noRel: {
			type: Boolean,
			required: false
		},
		prefetchedClass: {
			type: String,
			required: false
		},
		prefetch: {
			type: Boolean,
			required: false
		},
		prefetchOn: {
			type: [String, Object],
			required: false
		},
		noPrefetch: {
			type: Boolean,
			required: false
		},
		trailingSlash: {
			type: String,
			required: false
		},
		activeClass: {
			type: String,
			required: false
		},
		exactActiveClass: {
			type: String,
			required: false
		},
		ariaCurrentValue: {
			type: String,
			required: false,
			default: "page"
		},
		viewTransition: {
			type: Boolean,
			required: false
		},
		replace: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const route = useRoute();
		const appConfig = useAppConfig();
		const nuxtApp = useNuxtApp();
		const nuxtLinkProps = useForwardProps$1(reactiveOmit(props, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "to", "href", "raw", "custom", "locale", "class"));
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Flink_default,
			...defu$1({ variants: { active: {
				true: mergeClasses(appConfig.ui?.link?.variants?.active?.true, props.activeClass),
				false: mergeClasses(appConfig.ui?.link?.variants?.active?.false, props.inactiveClass)
			} } }, appConfig.ui?.link || {})
		}));
		const to = (0, vue_exports.computed)(() => {
			const path = props.to ?? props.href;
			if (!path) return path;
			if (typeof path !== "string") return path;
			if (props.external || hasProtocol(path, { acceptRelative: true })) return path;
			if (props.locale === false) return path;
			const localePath = nuxtApp.$localePath;
			if (!localePath) return path;
			const codes = nuxtApp.$i18n?.localeCodes?.value;
			if (codes?.length && new RegExp(`^/(${codes.join("|")})($|[/?#])`).test(path)) return path;
			return localePath(path, typeof props.locale === "string" ? props.locale : void 0) || path;
		});
		const isInternalLink = (0, vue_exports.computed)(() => {
			if (!to.value) return false;
			if (props.external) return false;
			if (typeof to.value !== "string") return true;
			if (hasProtocol(to.value, { acceptRelative: true })) return false;
			if (props.target && props.target !== "_self") return false;
			return true;
		});
		const rel = (0, vue_exports.computed)(() => {
			if (props.noRel) return null;
			if (props.rel !== void 0) return props.rel || null;
			if (!isInternalLink.value || props.target && props.target !== "_self") return "noopener noreferrer";
			return null;
		});
		function isLinkActive({ route: linkRoute, isActive, isExactActive } = {}) {
			if (props.active !== void 0) return props.active;
			if (!to.value) return false;
			if (props.exactQuery === "partial") {
				if (!isPartiallyEqual(linkRoute.query, route.query)) return false;
			} else if (props.exactQuery === true) {
				if (!isEqual$2(linkRoute.query, route.query)) return false;
			}
			if (props.exactHash && linkRoute.hash !== route.hash) return false;
			if (props.exact && isExactActive) return true;
			if (!props.exact && isActive) return true;
			return false;
		}
		function resolveLinkClass({ route: route2, isActive, isExactActive, prefetched } = {}) {
			const active = isLinkActive({
				route: route2,
				isActive,
				isExactActive
			});
			const prefetchedClass = prefetched ? props.prefetchedClass : void 0;
			if (props.raw) return [
				props.class,
				active ? props.activeClass : props.inactiveClass,
				prefetchedClass
			];
			return ui.value({
				class: prefetchedClass ? [props.class, prefetchedClass] : props.class,
				active,
				disabled: props.disabled
			});
		}
		(0, vue_exports.getCurrentInstance)();
		let prefetchApi;
		function onPrefetch() {
			prefetchApi?.prefetch?.(nuxtApp);
		}
		function getPrefetchListeners({ prefetch, shouldPrefetch }, attrs) {
			if (!prefetch || !shouldPrefetch) return;
			prefetchApi = {
				prefetch,
				shouldPrefetch
			};
			if (!shouldPrefetch("interaction")) return;
			return (0, vue_exports.mergeProps)({
				onPointerenter: attrs.onPointerenter,
				onFocus: attrs.onFocus
			}, {
				onPointerenter: onPrefetch,
				onFocus: onPrefetch
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			if (isInternalLink.value) _push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, (0, vue_exports.mergeProps)((0, vue_exports.unref)(nuxtLinkProps), {
				to: to.value,
				custom: ""
			}, _attrs), {
				default: (0, vue_exports.withCtx)(({ href, navigate, route: linkRoute, isActive, isExactActive, ...rest }, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.custom) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Slot), null, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {
									..._ctx.$attrs,
									...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
									...rest.prefetched && __props.prefetchedClass ? { class: __props.prefetchedClass } : {},
									...getPrefetchListeners(rest, _ctx.$attrs),
									as: __props.as,
									type: __props.type,
									disabled: __props.disabled,
									href,
									navigate,
									rel: rel.value,
									target: rest.target,
									isExternal: rest.isExternal,
									active: isLinkActive({
										route: linkRoute,
										isActive,
										isExactActive
									})
								}, null, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
									..._ctx.$attrs,
									...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
									...rest.prefetched && __props.prefetchedClass ? { class: __props.prefetchedClass } : {},
									...getPrefetchListeners(rest, _ctx.$attrs),
									as: __props.as,
									type: __props.type,
									disabled: __props.disabled,
									href,
									navigate,
									rel: rel.value,
									target: rest.target,
									isExternal: rest.isExternal,
									active: isLinkActive({
										route: linkRoute,
										isActive,
										isExactActive
									})
								})];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$10, (0, vue_exports.mergeProps)({
							..._ctx.$attrs,
							...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
							as: __props.as,
							type: __props.type,
							disabled: __props.disabled,
							href,
							navigate,
							rel: rel.value,
							target: rest.target,
							isExternal: rest.isExternal,
							...getPrefetchListeners(rest, _ctx.$attrs)
						}, { class: resolveLinkClass({
							route: linkRoute,
							isActive,
							isExactActive,
							prefetched: rest.prefetched
						}) }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", { active: isLinkActive({
									route: linkRoute,
									isActive,
									isExactActive
								}) }, null, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { active: isLinkActive({
									route: linkRoute,
									isActive,
									isExactActive
								}) })];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [__props.custom ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Slot), { key: 0 }, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
							..._ctx.$attrs,
							...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
							...rest.prefetched && __props.prefetchedClass ? { class: __props.prefetchedClass } : {},
							...getPrefetchListeners(rest, _ctx.$attrs),
							as: __props.as,
							type: __props.type,
							disabled: __props.disabled,
							href,
							navigate,
							rel: rel.value,
							target: rest.target,
							isExternal: rest.isExternal,
							active: isLinkActive({
								route: linkRoute,
								isActive,
								isExactActive
							})
						})]),
						_: 2
					}, 1024)) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$10, (0, vue_exports.mergeProps)({ key: 1 }, {
						..._ctx.$attrs,
						...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
						as: __props.as,
						type: __props.type,
						disabled: __props.disabled,
						href,
						navigate,
						rel: rel.value,
						target: rest.target,
						isExternal: rest.isExternal,
						...getPrefetchListeners(rest, _ctx.$attrs)
					}, { class: resolveLinkClass({
						route: linkRoute,
						isActive,
						isExactActive,
						prefetched: rest.prefetched
					}) }), {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { active: isLinkActive({
							route: linkRoute,
							isActive,
							isExactActive
						}) })]),
						_: 2
					}, 1040, ["class"]))];
				}),
				_: 3
			}, _parent));
			else if (__props.custom) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Slot), _attrs, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {
						..._ctx.$attrs,
						as: __props.as,
						type: __props.type,
						disabled: __props.disabled,
						...to.value ? {
							href: String(to.value),
							target: props.target,
							rel: rel.value,
							isExternal: true
						} : {},
						active: __props.active ?? false
					}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
						..._ctx.$attrs,
						as: __props.as,
						type: __props.type,
						disabled: __props.disabled,
						...to.value ? {
							href: String(to.value),
							target: props.target,
							rel: rel.value,
							isExternal: true
						} : {},
						active: __props.active ?? false
					})];
				}),
				_: 3
			}, _parent));
			else _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$10, (0, vue_exports.mergeProps)({
				..._ctx.$attrs,
				as: __props.as,
				type: __props.type,
				disabled: __props.disabled,
				...to.value ? {
					href: String(to.value),
					target: props.target,
					rel: rel.value,
					isExternal: true
				} : {}
			}, { class: resolveLinkClass() }, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", { active: __props.active ?? false }, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { active: __props.active ?? false })];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Link.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Fbutton.ts
var virtual_nuxt__nuxt_2Fui_2Fbutton_default = {
	"slots": {
		"base": ["rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75", "transition-colors"],
		"label": "truncate",
		"leadingIcon": "shrink-0",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailingIcon": "shrink-0"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
			"vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"variant": {
			"solid": "",
			"outline": "",
			"soft": "",
			"subtle": "",
			"ghost": "",
			"link": ""
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-xs gap-1",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-xs gap-1.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-sm gap-1.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5"
			},
			"lg": {
				"base": "px-3 py-2 text-sm gap-2",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6"
			}
		},
		"block": { "true": {
			"base": "w-full justify-center",
			"trailingIcon": "ms-auto"
		} },
		"square": { "true": "" },
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"active": {
			"true": { "base": "" },
			"false": { "base": "" }
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": "text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": "text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": "solid",
			"class": "text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": "solid",
			"class": "text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": "text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": "solid",
			"class": "text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": "ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": "outline",
			"class": "ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": "outline",
			"class": "ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": "ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": "outline",
			"class": "ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": "text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 outline-primary/25 focus-visible:outline-3 disabled:bg-primary/10 aria-disabled:bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": "text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 outline-secondary/25 focus-visible:outline-3 disabled:bg-secondary/10 aria-disabled:bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "soft",
			"class": "text-success bg-success/10 hover:bg-success/15 active:bg-success/15 outline-success/25 focus-visible:outline-3 disabled:bg-success/10 aria-disabled:bg-success/10"
		},
		{
			"color": "info",
			"variant": "soft",
			"class": "text-info bg-info/10 hover:bg-info/15 active:bg-info/15 outline-info/25 focus-visible:outline-3 disabled:bg-info/10 aria-disabled:bg-info/10"
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": "text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 outline-warning/25 focus-visible:outline-3 disabled:bg-warning/10 aria-disabled:bg-warning/10"
		},
		{
			"color": "error",
			"variant": "soft",
			"class": "text-error bg-error/10 hover:bg-error/15 active:bg-error/15 outline-error/25 focus-visible:outline-3 disabled:bg-error/10 aria-disabled:bg-error/10"
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": "text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": "text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": "text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": "text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": "text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": "ghost",
			"class": "text-primary hover:bg-primary/10 active:bg-primary/10 outline-primary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			"color": "secondary",
			"variant": "ghost",
			"class": "text-secondary hover:bg-secondary/10 active:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			"color": "success",
			"variant": "ghost",
			"class": "text-success hover:bg-success/10 active:bg-success/10 outline-success/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			"color": "info",
			"variant": "ghost",
			"class": "text-info hover:bg-info/10 active:bg-info/10 outline-info/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			"color": "warning",
			"variant": "ghost",
			"class": "text-warning hover:bg-warning/10 active:bg-warning/10 outline-warning/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			"color": "error",
			"variant": "ghost",
			"class": "text-error hover:bg-error/10 active:bg-error/10 outline-error/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			"color": "primary",
			"variant": "link",
			"class": "text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": "link",
			"class": "text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": "link",
			"class": "text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": "link",
			"class": "text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": "link",
			"class": "text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": "link",
			"class": "text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"variant": "solid",
			"class": "text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted outline-inverted/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"variant": "outline",
			"class": "ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": "soft",
			"class": "text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 outline-inverted/25 focus-visible:outline-3 disabled:bg-elevated aria-disabled:bg-elevated"
		},
		{
			"color": "neutral",
			"variant": "subtle",
			"class": "ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": "ghost",
			"class": "text-default hover:bg-elevated active:bg-elevated outline-inverted/25 focus-visible:outline-3 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
		},
		{
			"color": "neutral",
			"variant": "link",
			"class": "text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted outline-inverted/25 focus-visible:outline-3"
		},
		{
			"size": "xs",
			"square": true,
			"class": "p-1"
		},
		{
			"size": "sm",
			"square": true,
			"class": "p-1.5"
		},
		{
			"size": "md",
			"square": true,
			"class": "p-1.5"
		},
		{
			"size": "lg",
			"square": true,
			"class": "p-2"
		},
		{
			"size": "xl",
			"square": true,
			"class": "p-2"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		}
	],
	"defaultVariants": {
		"color": "primary",
		"variant": "solid",
		"size": "md"
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Button.vue
var _sfc_main$8 = {
	__name: "UButton",
	__ssrInlineRender: true,
	props: {
		label: {
			type: String,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		activeColor: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		activeVariant: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		square: {
			type: Boolean,
			required: false
		},
		block: {
			type: Boolean,
			required: false
		},
		loadingAuto: {
			type: Boolean,
			required: false
		},
		onClick: {
			type: [Function, Array],
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		type: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		active: {
			type: Boolean,
			required: false
		},
		exact: {
			type: Boolean,
			required: false
		},
		exactQuery: {
			type: [Boolean, String],
			required: false
		},
		exactHash: {
			type: Boolean,
			required: false
		},
		inactiveClass: {
			type: String,
			required: false
		},
		locale: {
			type: [Boolean, String],
			required: false
		},
		to: {
			type: null,
			required: false
		},
		href: {
			type: null,
			required: false
		},
		external: {
			type: Boolean,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		rel: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		noRel: {
			type: Boolean,
			required: false
		},
		prefetchedClass: {
			type: String,
			required: false
		},
		prefetch: {
			type: Boolean,
			required: false
		},
		prefetchOn: {
			type: [String, Object],
			required: false
		},
		noPrefetch: {
			type: Boolean,
			required: false
		},
		trailingSlash: {
			type: String,
			required: false
		},
		activeClass: {
			type: String,
			required: false
		},
		exactActiveClass: {
			type: String,
			required: false
		},
		ariaCurrentValue: {
			type: String,
			required: false
		},
		viewTransition: {
			type: Boolean,
			required: false
		},
		replace: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("button", _props);
		const appConfig = useAppConfig();
		const { orientation, size: buttonSize } = useFieldGroup(_props);
		const linkProps = useForwardProps(pickLinkProps(props));
		const forwardedLinkProps = (0, vue_exports.computed)(() => omit(linkProps.value, [
			"type",
			"disabled",
			"onClick"
		]));
		const loadingAutoState = (0, vue_exports.ref)(false);
		const formLoading = (0, vue_exports.inject)(formLoadingInjectionKey, void 0);
		async function onClickWrapper(event) {
			loadingAutoState.value = true;
			const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick];
			try {
				await Promise.all(callbacks.map((fn) => fn?.(event)));
			} finally {
				loadingAutoState.value = false;
			}
		}
		const isLoading = (0, vue_exports.computed)(() => {
			return props.loading || props.loadingAuto && (loadingAutoState.value || formLoading?.value && props.type === "submit");
		});
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons((0, vue_exports.computed)(() => ({
			icon: props.icon,
			leading: props.leading,
			leadingIcon: props.leadingIcon,
			trailing: props.trailing,
			trailingIcon: props.trailingIcon,
			loading: isLoading.value,
			loadingIcon: props.loadingIcon
		})));
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Fbutton_default,
			...defu$1({ variants: { active: {
				true: { base: mergeClasses(appConfig.ui?.button?.variants?.active?.true?.base, props.activeClass) },
				false: { base: mergeClasses(appConfig.ui?.button?.variants?.active?.false?.base, props.inactiveClass) }
			} } }, appConfig.ui?.button || {})
		})({
			color: props.color,
			variant: props.variant,
			size: buttonSize.value ?? props.size,
			loading: isLoading.value,
			block: props.block,
			square: props.square || !slots.default && !props.label,
			leading: isLeading.value,
			trailing: isTrailing.value,
			fieldGroup: orientation.value
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$9, (0, vue_exports.mergeProps)({
				type: (0, vue_exports.unref)(props).type,
				disabled: (0, vue_exports.unref)(props).disabled || isLoading.value
			}, forwardedLinkProps.value, { custom: "" }, _attrs), {
				default: (0, vue_exports.withCtx)(({ active, ...slotProps }, _push, _parent, _scopeId) => {
					if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$10, (0, vue_exports.mergeProps)({ "data-slot": "base" }, slotProps, {
						class: ui.value.base({
							class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class],
							active,
							...active && (0, vue_exports.unref)(props).activeVariant ? { variant: (0, vue_exports.unref)(props).activeVariant } : {},
							...active && (0, vue_exports.unref)(props).activeColor ? { color: (0, vue_exports.unref)(props).activeColor } : {}
						}),
						onClick: onClickWrapper
					}), {
						default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) {
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => {
									if ((0, vue_exports.unref)(isLeading) && (0, vue_exports.unref)(leadingIconName)) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$13, {
										name: (0, vue_exports.unref)(leadingIconName),
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({
											class: (0, vue_exports.unref)(props).ui?.leadingIcon,
											active
										})
									}, null, _parent, _scopeId));
									else if (!!(0, vue_exports.unref)(props).avatar) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$11, (0, vue_exports.mergeProps)({ size: (0, vue_exports.unref)(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize() }, (0, vue_exports.unref)(props).avatar, {
										"data-slot": "leadingAvatar",
										class: ui.value.leadingAvatar({
											class: (0, vue_exports.unref)(props).ui?.leadingAvatar,
											active
										})
									}), null, _parent, _scopeId));
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", { ui: ui.value }, () => {
									if ((0, vue_exports.unref)(props).label !== void 0 && (0, vue_exports.unref)(props).label !== null) _push(`<span data-slot="label" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.label({
										class: (0, vue_exports.unref)(props).ui?.label,
										active
									}))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).label)}</span>`);
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "trailing", { ui: ui.value }, () => {
									if ((0, vue_exports.unref)(isTrailing) && (0, vue_exports.unref)(trailingIconName)) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$13, {
										name: (0, vue_exports.unref)(trailingIconName),
										"data-slot": "trailingIcon",
										class: ui.value.trailingIcon({
											class: (0, vue_exports.unref)(props).ui?.trailingIcon,
											active
										})
									}, null, _parent, _scopeId));
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
							} else return [
								(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(isLeading) && (0, vue_exports.unref)(leadingIconName) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
									key: 0,
									name: (0, vue_exports.unref)(leadingIconName),
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({
										class: (0, vue_exports.unref)(props).ui?.leadingIcon,
										active
									})
								}, null, 8, ["name", "class"])) : !!(0, vue_exports.unref)(props).avatar ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$11, (0, vue_exports.mergeProps)({
									key: 1,
									size: (0, vue_exports.unref)(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
								}, (0, vue_exports.unref)(props).avatar, {
									"data-slot": "leadingAvatar",
									class: ui.value.leadingAvatar({
										class: (0, vue_exports.unref)(props).ui?.leadingAvatar,
										active
									})
								}), null, 16, ["size", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
								(0, vue_exports.renderSlot)(_ctx.$slots, "default", { ui: ui.value }, () => [(0, vue_exports.unref)(props).label !== void 0 && (0, vue_exports.unref)(props).label !== null ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 0,
									"data-slot": "label",
									class: ui.value.label({
										class: (0, vue_exports.unref)(props).ui?.label,
										active
									})
								}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).label), 3)) : (0, vue_exports.createCommentVNode)("", true)]),
								(0, vue_exports.renderSlot)(_ctx.$slots, "trailing", { ui: ui.value }, () => [(0, vue_exports.unref)(isTrailing) && (0, vue_exports.unref)(trailingIconName) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
									key: 0,
									name: (0, vue_exports.unref)(trailingIconName),
									"data-slot": "trailingIcon",
									class: ui.value.trailingIcon({
										class: (0, vue_exports.unref)(props).ui?.trailingIcon,
										active
									})
								}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)])
							];
						}),
						_: 2
					}, _parent, _scopeId));
					else return [(0, vue_exports.createVNode)(_sfc_main$10, (0, vue_exports.mergeProps)({ "data-slot": "base" }, slotProps, {
						class: ui.value.base({
							class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class],
							active,
							...active && (0, vue_exports.unref)(props).activeVariant ? { variant: (0, vue_exports.unref)(props).activeVariant } : {},
							...active && (0, vue_exports.unref)(props).activeColor ? { color: (0, vue_exports.unref)(props).activeColor } : {}
						}),
						onClick: onClickWrapper
					}), {
						default: (0, vue_exports.withCtx)(() => [
							(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(isLeading) && (0, vue_exports.unref)(leadingIconName) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
								key: 0,
								name: (0, vue_exports.unref)(leadingIconName),
								"data-slot": "leadingIcon",
								class: ui.value.leadingIcon({
									class: (0, vue_exports.unref)(props).ui?.leadingIcon,
									active
								})
							}, null, 8, ["name", "class"])) : !!(0, vue_exports.unref)(props).avatar ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$11, (0, vue_exports.mergeProps)({
								key: 1,
								size: (0, vue_exports.unref)(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
							}, (0, vue_exports.unref)(props).avatar, {
								"data-slot": "leadingAvatar",
								class: ui.value.leadingAvatar({
									class: (0, vue_exports.unref)(props).ui?.leadingAvatar,
									active
								})
							}), null, 16, ["size", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
							(0, vue_exports.renderSlot)(_ctx.$slots, "default", { ui: ui.value }, () => [(0, vue_exports.unref)(props).label !== void 0 && (0, vue_exports.unref)(props).label !== null ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
								key: 0,
								"data-slot": "label",
								class: ui.value.label({
									class: (0, vue_exports.unref)(props).ui?.label,
									active
								})
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).label), 3)) : (0, vue_exports.createCommentVNode)("", true)]),
							(0, vue_exports.renderSlot)(_ctx.$slots, "trailing", { ui: ui.value }, () => [(0, vue_exports.unref)(isTrailing) && (0, vue_exports.unref)(trailingIconName) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
								key: 0,
								name: (0, vue_exports.unref)(trailingIconName),
								"data-slot": "trailingIcon",
								class: ui.value.trailingIcon({
									class: (0, vue_exports.unref)(props).ui?.trailingIcon,
									active
								})
							}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)])
						]),
						_: 2
					}, 1040, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Button.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Fprogress.ts
var virtual_nuxt__nuxt_2Fui_2Fprogress_default = {
	"slots": {
		"root": "gap-2",
		"base": "relative overflow-hidden rounded-full bg-accented",
		"indicator": "rounded-full size-full transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:data-[state=indeterminate]:animate-pulse",
		"status": "flex text-dimmed duration-200 ease-out motion-reduce:transition-none",
		"steps": "grid items-end",
		"step": "truncate text-end row-start-1 col-start-1 transition-opacity ease-out"
	},
	"variants": {
		"animation": {
			"carousel": "",
			"carousel-inverse": "",
			"swing": "",
			"elastic": ""
		},
		"color": {
			"primary": {
				"indicator": "bg-primary",
				"steps": "text-primary"
			},
			"secondary": {
				"indicator": "bg-secondary",
				"steps": "text-secondary"
			},
			"success": {
				"indicator": "bg-success",
				"steps": "text-success"
			},
			"info": {
				"indicator": "bg-info",
				"steps": "text-info"
			},
			"warning": {
				"indicator": "bg-warning",
				"steps": "text-warning"
			},
			"error": {
				"indicator": "bg-error",
				"steps": "text-error"
			},
			"neutral": {
				"indicator": "bg-inverted",
				"steps": "text-highlighted"
			}
		},
		"size": {
			"2xs": {
				"status": "text-xs",
				"steps": "text-xs"
			},
			"xs": {
				"status": "text-xs",
				"steps": "text-xs"
			},
			"sm": {
				"status": "text-sm",
				"steps": "text-sm"
			},
			"md": {
				"status": "text-sm",
				"steps": "text-sm"
			},
			"lg": {
				"status": "text-sm",
				"steps": "text-sm"
			},
			"xl": {
				"status": "text-base",
				"steps": "text-base"
			},
			"2xl": {
				"status": "text-base",
				"steps": "text-base"
			}
		},
		"step": {
			"active": { "step": "opacity-100" },
			"first": { "step": "opacity-100 text-muted" },
			"other": { "step": "opacity-0" },
			"last": { "step": "" }
		},
		"orientation": {
			"horizontal": {
				"root": "w-full flex flex-col",
				"base": "w-full",
				"status": "flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]"
			},
			"vertical": {
				"root": "h-full flex flex-row-reverse",
				"base": "h-full",
				"status": "flex-col justify-end h-(--percent) min-h-fit transition-[height]"
			}
		},
		"inverted": { "true": { "status": "self-end" } }
	},
	"compoundVariants": [
		{
			"inverted": true,
			"orientation": "horizontal",
			"class": {
				"step": "text-start",
				"status": "flex-row-reverse"
			}
		},
		{
			"inverted": true,
			"orientation": "vertical",
			"class": {
				"steps": "items-start",
				"status": "flex-col-reverse"
			}
		},
		{
			"orientation": "horizontal",
			"size": "2xs",
			"class": "h-px"
		},
		{
			"orientation": "horizontal",
			"size": "xs",
			"class": "h-0.5"
		},
		{
			"orientation": "horizontal",
			"size": "sm",
			"class": "h-1"
		},
		{
			"orientation": "horizontal",
			"size": "md",
			"class": "h-2"
		},
		{
			"orientation": "horizontal",
			"size": "lg",
			"class": "h-3"
		},
		{
			"orientation": "horizontal",
			"size": "xl",
			"class": "h-4"
		},
		{
			"orientation": "horizontal",
			"size": "2xl",
			"class": "h-5"
		},
		{
			"orientation": "vertical",
			"size": "2xs",
			"class": "w-px"
		},
		{
			"orientation": "vertical",
			"size": "xs",
			"class": "w-0.5"
		},
		{
			"orientation": "vertical",
			"size": "sm",
			"class": "w-1"
		},
		{
			"orientation": "vertical",
			"size": "md",
			"class": "w-2"
		},
		{
			"orientation": "vertical",
			"size": "lg",
			"class": "w-3"
		},
		{
			"orientation": "vertical",
			"size": "xl",
			"class": "w-4"
		},
		{
			"orientation": "vertical",
			"size": "2xl",
			"class": "w-5"
		},
		{
			"orientation": "horizontal",
			"animation": "carousel",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_linear_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "carousel",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_linear_infinite]" }
		},
		{
			"orientation": "horizontal",
			"animation": "carousel-inverse",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_linear_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "carousel-inverse",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]" }
		},
		{
			"orientation": "horizontal",
			"animation": "swing",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "swing",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]" }
		},
		{
			"orientation": "horizontal",
			"animation": "elastic",
			"class": { "indicator": "relative motion-safe:data-[state=indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "elastic",
			"class": { "indicator": "relative motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]" }
		}
	],
	"defaultVariants": {
		"animation": "carousel",
		"color": "primary",
		"size": "md"
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Progress.vue
var _sfc_main$7 = {
	__name: "UProgress",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		max: {
			type: [Number, Array],
			required: false
		},
		status: {
			type: Boolean,
			required: false
		},
		inverted: {
			type: Boolean,
			required: false,
			default: false
		},
		size: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		animation: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		getValueLabel: {
			type: Function,
			required: false
		},
		getValueText: {
			type: Function,
			required: false
		},
		modelValue: {
			type: [Number, null],
			required: false,
			default: null
		}
	},
	emits: ["update:modelValue", "update:max"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("progress", _props);
		const { dir } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "getValueLabel", "getValueText", "modelValue"), emits);
		const isIndeterminate = (0, vue_exports.computed)(() => rootProps.value.modelValue === null);
		const hasSteps = (0, vue_exports.computed)(() => Array.isArray(props.max));
		const realMax = (0, vue_exports.computed)(() => {
			if (isIndeterminate.value || !props.max) return;
			if (Array.isArray(props.max)) return props.max.length - 1;
			return Number(props.max);
		});
		const percent = (0, vue_exports.computed)(() => {
			if (isIndeterminate.value) return;
			switch (true) {
				case rootProps.value.modelValue < 0: return 0;
				case rootProps.value.modelValue > (realMax.value ?? 100): return 100;
				default: return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
			}
		});
		const indicatorStyle = (0, vue_exports.computed)(() => {
			if (percent.value === void 0) return;
			if (props.orientation === "vertical") return { transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)` };
			else if (dir.value === "rtl") return { transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)` };
			else return { transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)` };
		});
		const statusStyle = (0, vue_exports.computed)(() => ({ "--percent": `${Math.max(percent.value ?? 0, 0)}%` }));
		function isActive(index) {
			return index === Number(props.modelValue);
		}
		function isFirst(index) {
			return index === 0;
		}
		function isLast(index) {
			return index === realMax.value;
		}
		function stepVariant(index) {
			index = Number(index);
			if (isActive(index) && !isFirst(index)) return "active";
			if (isFirst(index) && isActive(index)) return "first";
			if (isLast(index) && isActive(index)) return "last";
			return "other";
		}
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Fprogress_default,
			...appConfig.ui?.progress || {}
		})({
			animation: props.animation,
			size: props.size,
			color: props.color,
			orientation: props.orientation,
			inverted: props.inverted
		}));
		const themeColors = (0, vue_exports.computed)(() => Object.keys({
			...virtual_nuxt__nuxt_2Fui_2Fprogress_default.variants?.color,
			...appConfig.ui?.progress?.variants?.color
		}));
		const customColor = (0, vue_exports.computed)(() => props.color && !themeColors.value.includes(props.color) ? props.color : void 0);
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!isIndeterminate.value && ((0, vue_exports.unref)(props).status || !!slots.status)) {
							_push(`<div data-slot="status" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.status({ class: (0, vue_exports.unref)(props).ui?.status }))}" style="${(0, server_renderer_exports.ssrRenderStyle)(statusStyle.value)}"${_scopeId}>`);
							(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "status", { percent: percent.value }, () => {
								_push(`${(0, server_renderer_exports.ssrInterpolate)(percent.value)}% `);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ProgressRoot_default), (0, vue_exports.mergeProps)((0, vue_exports.unref)(rootProps), {
							max: realMax.value,
							"data-slot": "base",
							class: ui.value.base({ class: (0, vue_exports.unref)(props).ui?.base }),
							style: { "transform": "translateZ(0)" }
						}), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ProgressIndicator_default), {
									"data-slot": "indicator",
									class: ui.value.indicator({ class: (0, vue_exports.unref)(props).ui?.indicator }),
									style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
								}, null, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(ProgressIndicator_default), {
									"data-slot": "indicator",
									class: ui.value.indicator({ class: (0, vue_exports.unref)(props).ui?.indicator }),
									style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
								}, null, 8, ["class", "style"])];
							}),
							_: 1
						}, _parent, _scopeId));
						if (hasSteps.value) {
							_push(`<div data-slot="steps" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.steps({ class: (0, vue_exports.unref)(props).ui?.steps }))}" style="${(0, server_renderer_exports.ssrRenderStyle)(customColor.value ? { color: customColor.value } : void 0)}"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).max, (step, index) => {
								_push(`<div data-slot="step" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.step({
									class: (0, vue_exports.unref)(props).ui?.step,
									step: stepVariant(index)
								}))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, `step-${index}`, { step }, () => {
									_push(`${(0, server_renderer_exports.ssrInterpolate)(step)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
					} else return [
						!isIndeterminate.value && ((0, vue_exports.unref)(props).status || !!slots.status) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							"data-slot": "status",
							class: ui.value.status({ class: (0, vue_exports.unref)(props).ui?.status }),
							style: statusStyle.value
						}, [(0, vue_exports.renderSlot)(_ctx.$slots, "status", { percent: percent.value }, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(percent.value) + "% ", 1)])], 6)) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)((0, vue_exports.unref)(ProgressRoot_default), (0, vue_exports.mergeProps)((0, vue_exports.unref)(rootProps), {
							max: realMax.value,
							"data-slot": "base",
							class: ui.value.base({ class: (0, vue_exports.unref)(props).ui?.base }),
							style: { "transform": "translateZ(0)" }
						}), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ProgressIndicator_default), {
								"data-slot": "indicator",
								class: ui.value.indicator({ class: (0, vue_exports.unref)(props).ui?.indicator }),
								style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
							}, null, 8, ["class", "style"])]),
							_: 1
						}, 16, ["max", "class"]),
						hasSteps.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 1,
							"data-slot": "steps",
							class: ui.value.steps({ class: (0, vue_exports.unref)(props).ui?.steps }),
							style: customColor.value ? { color: customColor.value } : void 0
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).max, (step, index) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: index,
								"data-slot": "step",
								class: ui.value.step({
									class: (0, vue_exports.unref)(props).ui?.step,
									step: stepVariant(index)
								})
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, `step-${index}`, { step }, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(step), 1)])], 2);
						}), 128))], 6)) : (0, vue_exports.createCommentVNode)("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Ftoast.ts
var virtual_nuxt__nuxt_2Fui_2Ftoast_default = {
	"slots": {
		"root": "relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5",
		"wrapper": "w-0 flex-1 flex flex-col",
		"title": "text-sm font-medium text-highlighted",
		"description": "text-sm text-muted",
		"icon": "shrink-0 size-5",
		"avatar": "shrink-0",
		"avatarSize": "2xl",
		"actions": "flex gap-1.5 shrink-0",
		"progress": "absolute inset-x-0 bottom-0",
		"close": "p-0"
	},
	"variants": {
		"color": {
			"primary": {
				"root": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary",
				"icon": "text-primary"
			},
			"secondary": {
				"root": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary",
				"icon": "text-secondary"
			},
			"success": {
				"root": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success",
				"icon": "text-success"
			},
			"info": {
				"root": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info",
				"icon": "text-info"
			},
			"warning": {
				"root": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning",
				"icon": "text-warning"
			},
			"error": {
				"root": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error",
				"icon": "text-error"
			},
			"neutral": {
				"root": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted",
				"icon": "text-highlighted"
			}
		},
		"orientation": {
			"horizontal": {
				"root": "items-center",
				"actions": "items-center"
			},
			"vertical": {
				"root": "items-start",
				"actions": "items-start mt-2.5"
			}
		},
		"title": { "true": { "description": "mt-1" } }
	},
	"defaultVariants": { "color": "primary" }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Toast.vue
var _sfc_main$6 = {
	__name: "UToast",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: [
				String,
				Object,
				Function
			],
			required: false
		},
		description: {
			type: [
				String,
				Object,
				Function
			],
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		close: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		closeIcon: {
			type: null,
			required: false
		},
		actions: {
			type: Array,
			required: false
		},
		duration: {
			type: Number,
			required: false
		},
		progress: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		type: {
			type: String,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pause",
		"resume",
		"swipeStart",
		"swipeMove",
		"swipeCancel",
		"swipeEnd",
		"update:open"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("toast", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Ftoast_default,
			...appConfig.ui?.toast || {}
		})({
			color: props.color,
			orientation: props.orientation,
			title: !!props.title || !!slots.title
		}));
		const rootRef = (0, vue_exports.useTemplateRef)("rootRef");
		const height = (0, vue_exports.ref)(0);
		__expose({ height });
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastRoot_default), (0, vue_exports.mergeProps)({
				ref_key: "rootRef",
				ref: rootRef
			}, (0, vue_exports.unref)(rootProps), {
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }),
				style: { "--height": height.value }
			}, _attrs), {
				default: (0, vue_exports.withCtx)(({ remaining, duration: totalDuration, open }, _push, _parent, _scopeId) => {
					if (_push) {
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => {
							if ((0, vue_exports.unref)(props).avatar) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$11, (0, vue_exports.mergeProps)({ size: (0, vue_exports.unref)(props).ui?.avatarSize || ui.value.avatarSize() }, (0, vue_exports.unref)(props).avatar, {
								"data-slot": "avatar",
								class: ui.value.avatar({ class: (0, vue_exports.unref)(props).ui?.avatar })
							}), null, _parent, _scopeId));
							else if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$13, {
								name: (0, vue_exports.unref)(props).icon,
								"data-slot": "icon",
								class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`<div data-slot="wrapper" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
						if ((0, vue_exports.unref)(props).title || !!slots.title) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastTitle_default), {
							"data-slot": "title",
							class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, () => {
									if (typeof (0, vue_exports.unref)(props).title === "function") (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).title()), null, null), _parent, _scopeId);
									else if (typeof (0, vue_exports.unref)(props).title === "object") (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).title), null, null), _parent, _scopeId);
									else _push(`<!--[-->${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}<!--]-->`);
								}, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [typeof (0, vue_exports.unref)(props).title === "function" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).title()), { key: 0 })) : typeof (0, vue_exports.unref)(props).title === "object" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).title), { key: 1 })) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, { key: 2 }, [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)], 64))])];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if ((0, vue_exports.unref)(props).description || !!slots.description) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastDescription_default), {
							"data-slot": "description",
							class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "description", {}, () => {
									if (typeof (0, vue_exports.unref)(props).description === "function") (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).description()), null, null), _parent, _scopeId);
									else if (typeof (0, vue_exports.unref)(props).description === "object") (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).description), null, null), _parent, _scopeId);
									else _push(`<!--[-->${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}<!--]-->`);
								}, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [typeof (0, vue_exports.unref)(props).description === "function" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).description()), { key: 0 })) : typeof (0, vue_exports.unref)(props).description === "object" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).description), { key: 1 })) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, { key: 2 }, [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)], 64))])];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if ((0, vue_exports.unref)(props).orientation === "vertical" && ((0, vue_exports.unref)(props).actions?.length || !!slots.actions)) {
							_push(`<div data-slot="actions" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.actions({ class: (0, vue_exports.unref)(props).ui?.actions }))}"${_scopeId}>`);
							(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).actions, (action, index) => {
									_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastAction_default), {
										key: index,
										"alt-text": action.label || "Action",
										"as-child": "",
										onClick: () => {}
									}, {
										default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$8, (0, vue_exports.mergeProps)({
												size: "xs",
												color: (0, vue_exports.unref)(props).color
											}, { ref_for: true }, action), null, _parent, _scopeId));
											else return [(0, vue_exports.createVNode)(_sfc_main$8, (0, vue_exports.mergeProps)({
												size: "xs",
												color: (0, vue_exports.unref)(props).color
											}, { ref_for: true }, action), null, 16, ["color"])];
										}),
										_: 2
									}, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if ((0, vue_exports.unref)(props).orientation === "horizontal" && ((0, vue_exports.unref)(props).actions?.length || !!slots.actions) || (0, vue_exports.unref)(props).close) {
							_push(`<div data-slot="actions" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.actions({
								class: (0, vue_exports.unref)(props).ui?.actions,
								orientation: "horizontal"
							}))}"${_scopeId}>`);
							if ((0, vue_exports.unref)(props).orientation === "horizontal" && ((0, vue_exports.unref)(props).actions?.length || !!slots.actions)) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).actions, (action, index) => {
									_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastAction_default), {
										key: index,
										"alt-text": action.label || "Action",
										"as-child": "",
										onClick: () => {}
									}, {
										default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$8, (0, vue_exports.mergeProps)({
												size: "xs",
												color: (0, vue_exports.unref)(props).color
											}, { ref_for: true }, action), null, _parent, _scopeId));
											else return [(0, vue_exports.createVNode)(_sfc_main$8, (0, vue_exports.mergeProps)({
												size: "xs",
												color: (0, vue_exports.unref)(props).color
											}, { ref_for: true }, action), null, 16, ["color"])];
										}),
										_: 2
									}, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							else _push(`<!---->`);
							if ((0, vue_exports.unref)(props).close || !!slots.close) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastClose_default), { "as-child": "" }, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "close", { ui: ui.value }, () => {
										if ((0, vue_exports.unref)(props).close) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$8, (0, vue_exports.mergeProps)({
											icon: (0, vue_exports.unref)(props).closeIcon || (0, vue_exports.unref)(appConfig).ui.icons.close,
											color: "neutral",
											variant: "link",
											"aria-label": (0, vue_exports.unref)(t)("toast.close")
										}, typeof (0, vue_exports.unref)(props).close === "object" ? (0, vue_exports.unref)(props).close : {}, {
											"data-slot": "close",
											class: ui.value.close({ class: (0, vue_exports.unref)(props).ui?.close }),
											onClick: () => {}
										}), null, _parent, _scopeId));
										else _push(`<!---->`);
									}, _push, _parent, _scopeId);
									else return [(0, vue_exports.renderSlot)(_ctx.$slots, "close", { ui: ui.value }, () => [(0, vue_exports.unref)(props).close ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$8, (0, vue_exports.mergeProps)({
										key: 0,
										icon: (0, vue_exports.unref)(props).closeIcon || (0, vue_exports.unref)(appConfig).ui.icons.close,
										color: "neutral",
										variant: "link",
										"aria-label": (0, vue_exports.unref)(t)("toast.close")
									}, typeof (0, vue_exports.unref)(props).close === "object" ? (0, vue_exports.unref)(props).close : {}, {
										"data-slot": "close",
										class: ui.value.close({ class: (0, vue_exports.unref)(props).ui?.close }),
										onClick: (0, vue_exports.withModifiers)(() => {}, ["stop"])
									}), null, 16, [
										"icon",
										"aria-label",
										"class",
										"onClick"
									])) : (0, vue_exports.createCommentVNode)("", true)])];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						if ((0, vue_exports.unref)(props).progress && open && remaining > 0 && totalDuration) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$7, (0, vue_exports.mergeProps)({
							"model-value": remaining / totalDuration * 100,
							color: (0, vue_exports.unref)(props).color
						}, typeof (0, vue_exports.unref)(props).progress === "object" ? (0, vue_exports.unref)(props).progress : {}, {
							size: "sm",
							"data-slot": "progress",
							class: ui.value.progress({ class: (0, vue_exports.unref)(props).ui?.progress })
						}), null, _parent, _scopeId));
						else _push(`<!---->`);
					} else return [
						(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(props).avatar ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$11, (0, vue_exports.mergeProps)({
							key: 0,
							size: (0, vue_exports.unref)(props).ui?.avatarSize || ui.value.avatarSize()
						}, (0, vue_exports.unref)(props).avatar, {
							"data-slot": "avatar",
							class: ui.value.avatar({ class: (0, vue_exports.unref)(props).ui?.avatar })
						}), null, 16, ["size", "class"])) : (0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$13, {
							key: 1,
							name: (0, vue_exports.unref)(props).icon,
							"data-slot": "icon",
							class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
						}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
						(0, vue_exports.createVNode)("div", {
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
						}, [
							(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(ToastTitle_default), {
								key: 0,
								"data-slot": "title",
								class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [typeof (0, vue_exports.unref)(props).title === "function" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).title()), { key: 0 })) : typeof (0, vue_exports.unref)(props).title === "object" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).title), { key: 1 })) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, { key: 2 }, [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)], 64))])]),
								_: 3
							}, 8, ["class"])) : (0, vue_exports.createCommentVNode)("", true),
							(0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(ToastDescription_default), {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [typeof (0, vue_exports.unref)(props).description === "function" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).description()), { key: 0 })) : typeof (0, vue_exports.unref)(props).description === "object" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(props).description), { key: 1 })) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, { key: 2 }, [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)], 64))])]),
								_: 3
							}, 8, ["class"])) : (0, vue_exports.createCommentVNode)("", true),
							(0, vue_exports.unref)(props).orientation === "vertical" && ((0, vue_exports.unref)(props).actions?.length || !!slots.actions) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 2,
								"data-slot": "actions",
								class: ui.value.actions({ class: (0, vue_exports.unref)(props).ui?.actions })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "actions", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).actions, (action, index) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(ToastAction_default), {
									key: index,
									"alt-text": action.label || "Action",
									"as-child": "",
									onClick: (0, vue_exports.withModifiers)(() => {}, ["stop"])
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_sfc_main$8, (0, vue_exports.mergeProps)({
										size: "xs",
										color: (0, vue_exports.unref)(props).color
									}, { ref_for: true }, action), null, 16, ["color"])]),
									_: 2
								}, 1032, ["alt-text", "onClick"]);
							}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)
						], 2),
						(0, vue_exports.unref)(props).orientation === "horizontal" && ((0, vue_exports.unref)(props).actions?.length || !!slots.actions) || (0, vue_exports.unref)(props).close ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							"data-slot": "actions",
							class: ui.value.actions({
								class: (0, vue_exports.unref)(props).ui?.actions,
								orientation: "horizontal"
							})
						}, [(0, vue_exports.unref)(props).orientation === "horizontal" && ((0, vue_exports.unref)(props).actions?.length || !!slots.actions) ? (0, vue_exports.renderSlot)(_ctx.$slots, "actions", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).actions, (action, index) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(ToastAction_default), {
								key: index,
								"alt-text": action.label || "Action",
								"as-child": "",
								onClick: (0, vue_exports.withModifiers)(() => {}, ["stop"])
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_sfc_main$8, (0, vue_exports.mergeProps)({
									size: "xs",
									color: (0, vue_exports.unref)(props).color
								}, { ref_for: true }, action), null, 16, ["color"])]),
								_: 2
							}, 1032, ["alt-text", "onClick"]);
						}), 128))], void 0, 0) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).close || !!slots.close ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(ToastClose_default), {
							key: 1,
							"as-child": ""
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "close", { ui: ui.value }, () => [(0, vue_exports.unref)(props).close ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$8, (0, vue_exports.mergeProps)({
								key: 0,
								icon: (0, vue_exports.unref)(props).closeIcon || (0, vue_exports.unref)(appConfig).ui.icons.close,
								color: "neutral",
								variant: "link",
								"aria-label": (0, vue_exports.unref)(t)("toast.close")
							}, typeof (0, vue_exports.unref)(props).close === "object" ? (0, vue_exports.unref)(props).close : {}, {
								"data-slot": "close",
								class: ui.value.close({ class: (0, vue_exports.unref)(props).ui?.close }),
								onClick: (0, vue_exports.withModifiers)(() => {}, ["stop"])
							}), null, 16, [
								"icon",
								"aria-label",
								"class",
								"onClick"
							])) : (0, vue_exports.createCommentVNode)("", true)])]),
							_: 3
						})) : (0, vue_exports.createCommentVNode)("", true)], 2)) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.unref)(props).progress && open && remaining > 0 && totalDuration ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$7, (0, vue_exports.mergeProps)({
							key: 1,
							"model-value": remaining / totalDuration * 100,
							color: (0, vue_exports.unref)(props).color
						}, typeof (0, vue_exports.unref)(props).progress === "object" ? (0, vue_exports.unref)(props).progress : {}, {
							size: "sm",
							"data-slot": "progress",
							class: ui.value.progress({ class: (0, vue_exports.unref)(props).ui?.progress })
						}), null, 16, [
							"model-value",
							"color",
							"class"
						])) : (0, vue_exports.createCommentVNode)("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Toast.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fui%2Ftoaster.ts
var virtual_nuxt__nuxt_2Fui_2Ftoaster_default = {
	"slots": {
		"viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none",
		"base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_var(--ease-out)] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_var(--ease-out)] motion-safe:data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_200ms_var(--ease-out)] motion-safe:data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_200ms_var(--ease-out)] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out motion-reduce:transition-none"
	},
	"variants": {
		"position": {
			"top-left": { "viewport": "left-4" },
			"top-center": { "viewport": "left-1/2 transform -translate-x-1/2" },
			"top-right": { "viewport": "right-4" },
			"bottom-left": { "viewport": "left-4" },
			"bottom-center": { "viewport": "left-1/2 transform -translate-x-1/2" },
			"bottom-right": { "viewport": "right-4" }
		},
		"swipeDirection": {
			"up": "data-[swipe=end]:animate-[toast-slide-up_200ms_var(--ease-out)]",
			"right": "data-[swipe=end]:animate-[toast-slide-right_200ms_var(--ease-out)]",
			"down": "data-[swipe=end]:animate-[toast-slide-down_200ms_var(--ease-out)]",
			"left": "data-[swipe=end]:animate-[toast-slide-left_200ms_var(--ease-out)]"
		}
	},
	"compoundVariants": [
		{
			"position": [
				"top-left",
				"top-center",
				"top-right"
			],
			"class": {
				"viewport": "top-4",
				"base": "top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_var(--ease-out)]"
			}
		},
		{
			"position": [
				"bottom-left",
				"bottom-center",
				"bottom-right"
			],
			"class": {
				"viewport": "bottom-4",
				"base": "bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_var(--ease-out)]"
			}
		},
		{
			"swipeDirection": ["left", "right"],
			"class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
		},
		{
			"swipeDirection": ["up", "down"],
			"class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
		}
	],
	"defaultVariants": { "position": "bottom-right" }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue
var _sfc_main$5 = /*@__PURE__*/ Object.assign({ name: "Toaster" }, {
	__ssrInlineRender: true,
	props: {
		position: {
			type: null,
			required: false
		},
		expand: {
			type: Boolean,
			required: false,
			default: true
		},
		progress: {
			type: Boolean,
			required: false,
			default: true
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		max: {
			type: Number,
			required: false,
			default: 5
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		label: {
			type: String,
			required: false
		},
		duration: {
			type: Number,
			required: false,
			default: 5e3
		},
		disableSwipe: {
			type: Boolean,
			required: false
		},
		swipeThreshold: {
			type: Number,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("toaster", __props);
		const { toasts, remove } = useToast();
		const appConfig = useAppConfig();
		(0, vue_exports.provide)(toastMaxInjectionKey, (0, vue_exports.toRef)(() => props.max));
		const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold", "disableSwipe"));
		const portalProps = usePortal((0, vue_exports.toRef)(() => props.portal));
		const swipeDirection = (0, vue_exports.computed)(() => {
			switch (props.position) {
				case "top-center": return "up";
				case "top-right":
				case "bottom-right": return "right";
				case "bottom-center": return "down";
				case "top-left":
				case "bottom-left": return "left";
			}
			return "right";
		});
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Ftoaster_default,
			...appConfig.ui?.toaster || {}
		})({
			position: props.position,
			swipeDirection: swipeDirection.value
		}));
		function onUpdateOpen(value, id) {
			if (value) return;
			remove(id);
		}
		const hovered = (0, vue_exports.ref)(false);
		const expanded = (0, vue_exports.computed)(() => props.expand || hovered.value);
		const refs = (0, vue_exports.ref)([]);
		const height = (0, vue_exports.computed)(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
		const frontHeight = (0, vue_exports.computed)(() => refs.value[refs.value.length - 1]?.height || 0);
		function getOffset(index) {
			return refs.value.slice(index + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastProvider_default), (0, vue_exports.mergeProps)({ "swipe-direction": swipeDirection.value }, (0, vue_exports.unref)(providerProps), _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(toasts), (toast, index) => {
							_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$6, (0, vue_exports.mergeProps)({
								key: toast.id,
								ref_for: true,
								ref_key: "refs",
								ref: refs,
								progress: (0, vue_exports.unref)(props).progress
							}, { ref_for: true }, (0, vue_exports.unref)(omit)(toast, [
								"id",
								"close",
								"_duplicate",
								"_updated",
								"onClick"
							]), {
								close: toast.close,
								"data-expanded": expanded.value,
								"data-front": !expanded.value && index === (0, vue_exports.unref)(toasts).length - 1,
								"data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
								style: {
									"--index": index - (0, vue_exports.unref)(toasts).length + (0, vue_exports.unref)(toasts).length,
									"--before": (0, vue_exports.unref)(toasts).length - 1 - index,
									"--offset": getOffset(index),
									"--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
									"--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
									"--transform": "translateY(var(--translate)) scale(var(--scale))"
								},
								"data-slot": "base",
								class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
								"onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
								onClick: ($event) => toast.onClick && toast.onClick(toast)
							}), null, _parent, _scopeId));
						});
						_push(`<!--]-->`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastPortal_default), (0, vue_exports.unref)(portalProps), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ToastViewport_default), {
									"data-expanded": expanded.value,
									"data-slot": "viewport",
									class: ui.value.viewport({ class: [(0, vue_exports.unref)(props).ui?.viewport, (0, vue_exports.unref)(props).class] }),
									style: {
										"--scale-factor": "0.05",
										"--translate-factor": (0, vue_exports.unref)(props).position?.startsWith("top") ? "1px" : "-1px",
										"--gap": (0, vue_exports.unref)(props).position?.startsWith("top") ? "16px" : "-16px",
										"--front-height": `${frontHeight.value}px`,
										"--height": `${height.value}px`
									},
									onMouseenter: ($event) => hovered.value = true,
									onMouseleave: ($event) => hovered.value = false
								}, null, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(ToastViewport_default), {
									"data-expanded": expanded.value,
									"data-slot": "viewport",
									class: ui.value.viewport({ class: [(0, vue_exports.unref)(props).ui?.viewport, (0, vue_exports.unref)(props).class] }),
									style: {
										"--scale-factor": "0.05",
										"--translate-factor": (0, vue_exports.unref)(props).position?.startsWith("top") ? "1px" : "-1px",
										"--gap": (0, vue_exports.unref)(props).position?.startsWith("top") ? "16px" : "-16px",
										"--front-height": `${frontHeight.value}px`,
										"--height": `${height.value}px`
									},
									onMouseenter: ($event) => hovered.value = true,
									onMouseleave: ($event) => hovered.value = false
								}, null, 8, [
									"data-expanded",
									"class",
									"style",
									"onMouseenter",
									"onMouseleave"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						(0, vue_exports.renderSlot)(_ctx.$slots, "default"),
						((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(toasts), (toast, index) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$6, (0, vue_exports.mergeProps)({
								key: toast.id,
								ref_for: true,
								ref_key: "refs",
								ref: refs,
								progress: (0, vue_exports.unref)(props).progress
							}, { ref_for: true }, (0, vue_exports.unref)(omit)(toast, [
								"id",
								"close",
								"_duplicate",
								"_updated",
								"onClick"
							]), {
								close: toast.close,
								"data-expanded": expanded.value,
								"data-front": !expanded.value && index === (0, vue_exports.unref)(toasts).length - 1,
								"data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
								style: {
									"--index": index - (0, vue_exports.unref)(toasts).length + (0, vue_exports.unref)(toasts).length,
									"--before": (0, vue_exports.unref)(toasts).length - 1 - index,
									"--offset": getOffset(index),
									"--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
									"--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
									"--transform": "translateY(var(--translate)) scale(var(--scale))"
								},
								"data-slot": "base",
								class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
								"onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
								onClick: ($event) => toast.onClick && toast.onClick(toast)
							}), null, 16, [
								"progress",
								"close",
								"data-expanded",
								"data-front",
								"data-pulsing",
								"style",
								"class",
								"onUpdate:open",
								"onClick"
							]);
						}), 128)),
						(0, vue_exports.createVNode)((0, vue_exports.unref)(ToastPortal_default), (0, vue_exports.unref)(portalProps), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ToastViewport_default), {
								"data-expanded": expanded.value,
								"data-slot": "viewport",
								class: ui.value.viewport({ class: [(0, vue_exports.unref)(props).ui?.viewport, (0, vue_exports.unref)(props).class] }),
								style: {
									"--scale-factor": "0.05",
									"--translate-factor": (0, vue_exports.unref)(props).position?.startsWith("top") ? "1px" : "-1px",
									"--gap": (0, vue_exports.unref)(props).position?.startsWith("top") ? "16px" : "-16px",
									"--front-height": `${frontHeight.value}px`,
									"--height": `${height.value}px`
								},
								onMouseenter: ($event) => hovered.value = true,
								onMouseleave: ($event) => hovered.value = false
							}, null, 8, [
								"data-expanded",
								"class",
								"style",
								"onMouseenter",
								"onMouseleave"
							])]),
							_: 1
						}, 16)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Toaster_default = Object.assign(_sfc_main$5, { __name: "UToaster" });
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/composables/useOverlay.js
function _useOverlay() {
	const overlays = (0, vue_exports.shallowReactive)([]);
	const create = (component, _options) => {
		const { props, defaultOpen, destroyOnClose } = _options || {};
		const options = (0, vue_exports.reactive)({
			id: Symbol(""),
			isOpen: !!defaultOpen,
			component: (0, vue_exports.markRaw)(component),
			isMounted: !!defaultOpen,
			destroyOnClose: !!destroyOnClose,
			originalProps: props || {},
			props: { ...props },
			resolvers: []
		});
		overlays.push(options);
		return {
			...options,
			open: (props2) => open(options.id, props2),
			close: (value) => close(options.id, value),
			patch: (props2) => patch(options.id, props2)
		};
	};
	const open = (id, props) => {
		const overlay = getOverlay(id);
		if (props) overlay.props = {
			...overlay.originalProps,
			...props
		};
		else overlay.props = { ...overlay.originalProps };
		overlay.isOpen = true;
		overlay.isMounted = true;
		const result = new Promise((resolve) => overlay.resolvers.push(resolve));
		return Object.assign(result, {
			id,
			isMounted: overlay.isMounted,
			isOpen: overlay.isOpen,
			result
		});
	};
	const close = (id, value) => {
		const overlay = getOverlay(id);
		overlay.isOpen = false;
		for (const resolve of overlay.resolvers.splice(0)) resolve(value);
	};
	const closeAll = () => {
		overlays.forEach((overlay) => close(overlay.id));
	};
	const unmount = (id) => {
		const overlay = getOverlay(id);
		overlay.isMounted = false;
		if (overlay.destroyOnClose) {
			const index = overlays.findIndex((overlay2) => overlay2.id === id);
			overlays.splice(index, 1);
		}
	};
	const patch = (id, props) => {
		const overlay = getOverlay(id);
		overlay.props = {
			...overlay.props,
			...props
		};
	};
	const getOverlay = (id) => {
		const overlay = overlays.find((overlay2) => overlay2.id === id);
		if (!overlay) throw new Error("Overlay not found");
		return overlay;
	};
	const isOpen = (id) => {
		return getOverlay(id).isOpen;
	};
	return {
		overlays,
		open,
		close,
		closeAll,
		create,
		patch,
		unmount,
		isOpen
	};
}
var useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue
var _sfc_main$4 = {
	__name: "UOverlayProvider",
	__ssrInlineRender: true,
	setup(__props) {
		const { overlays, unmount, close } = useOverlay();
		const mountedOverlays = (0, vue_exports.computed)(() => overlays.filter((overlay) => overlay.isMounted));
		const onAfterLeave = (id) => {
			close(id);
			unmount(id);
		};
		const onClose = (id, value) => {
			close(id, value);
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(mountedOverlays.value, (overlay) => {
				(0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(overlay.component), (0, vue_exports.mergeProps)({ key: overlay.id }, { ref_for: true }, overlay.props, {
					open: overlay.isOpen,
					"onUpdate:open": ($event) => overlay.isOpen = $event,
					onClose: (value) => onClose(overlay.id, value),
					"onAfter:leave": ($event) => onAfterLeave(overlay.id)
				}), null), _parent);
			});
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/App.vue
var _sfc_main$3 = /*@__PURE__*/ Object.assign({ name: "App" }, {
	__ssrInlineRender: true,
	props: {
		tooltip: {
			type: Object,
			required: false
		},
		toaster: {
			type: [Object, null],
			required: false
		},
		locale: {
			type: Object,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: "body"
		},
		dir: {
			type: String,
			required: false
		},
		scrollBody: {
			type: [Boolean, Object],
			required: false
		},
		nonce: {
			type: String,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const configProviderProps = useForwardProps$1(reactivePick(props, "scrollBody"));
		const tooltipProps = (0, vue_exports.toRef)(() => props.tooltip);
		const toasterProps = (0, vue_exports.toRef)(() => props.toaster);
		const locale = (0, vue_exports.toRef)(() => props.dir ? {
			...props.locale || en_default,
			dir: props.dir
		} : props.locale);
		(0, vue_exports.provide)(localeContextInjectionKey, locale);
		const portal = (0, vue_exports.toRef)(() => props.portal);
		(0, vue_exports.provide)(portalTargetInjectionKey, portal);
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ConfigProvider_default), (0, vue_exports.mergeProps)({
				"use-id": () => (0, vue_exports.useId)(),
				dir: props.dir || locale.value?.dir,
				locale: locale.value?.code
			}, (0, vue_exports.unref)(configProviderProps), _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TooltipProvider_default), tooltipProps.value, {
						default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) {
								if (__props.toaster !== null) _push((0, server_renderer_exports.ssrRenderComponent)(Toaster_default, toasterProps.value, {
									default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
									}),
									_: 3
								}, _parent, _scopeId));
								else (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$4, null, null, _parent, _scopeId));
							} else return [__props.toaster !== null ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(Toaster_default, (0, vue_exports.mergeProps)({ key: 0 }, toasterProps.value), {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
								_: 3
							}, 16)) : (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1), (0, vue_exports.createVNode)(_sfc_main$4)];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(TooltipProvider_default), tooltipProps.value, {
						default: (0, vue_exports.withCtx)(() => [__props.toaster !== null ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(Toaster_default, (0, vue_exports.mergeProps)({ key: 0 }, toasterProps.value), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
							_: 3
						}, 16)) : (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1), (0, vue_exports.createVNode)(_sfc_main$4)]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.11.3_e497e5bf04e268de347082caf772c4f4/node_modules/@nuxt/ui/dist/runtime/components/App.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var App_default = Object.assign(_sfc_main$3, { __name: "UApp" });
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/route-provider.js
var defineRouteProvider = (name = "RouteProvider") => (0, vue_exports.defineComponent)({
	name,
	props: {
		route: {
			type: Object,
			required: true
		},
		vnode: Object,
		vnodeRef: Object,
		renderKey: String,
		trackRootNodes: Boolean,
		routeRecord: Object
	},
	setup(props) {
		const previousKey = props.renderKey;
		const previousRoute = props.route;
		const route = {};
		for (const key in props.route) Object.defineProperty(route, key, {
			get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
			enumerable: true
		});
		(0, vue_exports.provide)(PageRouteSymbol, (0, vue_exports.shallowReactive)(route));
		return () => {
			if (!props.vnode) return props.vnode;
			return (0, vue_exports.h)(props.vnode, { ref: props.vnodeRef });
		};
	}
});
var RouteProvider = defineRouteProvider();
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/pages/runtime/page.js
var page_default = (0, vue_exports.defineComponent)({
	name: "NuxtPage",
	inheritAttrs: false,
	props: {
		name: { type: String },
		transition: {
			type: [Boolean, Object],
			default: void 0
		},
		keepalive: {
			type: [Boolean, Object],
			default: void 0
		},
		route: { type: Object },
		pageKey: {
			type: [Function, String],
			default: null
		}
	},
	setup(props, { attrs, slots, expose }) {
		const nuxtApp = useNuxtApp();
		const pageRef = (0, vue_exports.ref)();
		(0, vue_exports.inject)(PageRouteSymbol, null);
		expose({ pageRef });
		(0, vue_exports.inject)(LayoutMetaSymbol, null);
		nuxtApp.deferHydration();
		return () => {
			return (0, vue_exports.h)(RouterView, {
				name: props.name,
				route: props.route,
				...attrs
			}, { default: markStableSlot((routeProps) => {
				return (0, vue_exports.h)(vue_exports.Suspense, { suspensible: true }, { default() {
					return (0, vue_exports.h)(RouteProvider, {
						vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
						route: routeProps.route,
						vnodeRef: pageRef
					});
				} });
			}) });
		};
	}
});
function markStableSlot(fn) {
	const wrapped = ((routeProps) => {
		const result = fn(routeProps);
		if (Array.isArray(result)) return result;
		if (result == null || !(0, vue_exports.isVNode)(result)) return [(0, vue_exports.createCommentVNode)()];
		return [result];
	});
	wrapped._n = true;
	return wrapped;
}
function normalizeSlot(slot, data) {
	const slotContent = slot(data);
	return slotContent.length === 1 ? (0, vue_exports.h)(slotContent[0]) : (0, vue_exports.h)(vue_exports.Fragment, void 0, slotContent);
}
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region app/app.vue
var _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_UApp = App_default;
	const _component_NuxtPage = page_default;
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_UApp, _attrs, {
		default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtPage, null, null, _parent, _scopeId));
			else return [(0, vue_exports.createVNode)(_component_NuxtPage)];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var app_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/nuxt-error-page.vue
var _sfc_main$1 = {
	__name: "nuxt-error-page",
	__ssrInlineRender: true,
	props: { error: Object },
	setup(__props) {
		const _error = __props.error;
		const status = Number(_error.statusCode || 500);
		const is404 = status === 404;
		const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
		const description = _error.message || _error.toString();
		const stack = void 0;
		const _Error404 = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/error-404-BudBXhoj.js"));
		const _Error = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/error-500-C3wXHbnd.js"));
		const ErrorTemplate = is404 ? _Error404 : _Error;
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ErrorTemplate), (0, vue_exports.mergeProps)({
				status: (0, vue_exports.unref)(status),
				statusText: (0, vue_exports.unref)(statusText),
				statusCode: (0, vue_exports.unref)(status),
				statusMessage: (0, vue_exports.unref)(statusText),
				description: (0, vue_exports.unref)(description),
				stack: (0, vue_exports.unref)(stack)
			}, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fisland-renderer.mjs
var IslandRenderer = () => null;
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/nuxt-root.vue
var _sfc_main = {
	__name: "nuxt-root",
	__ssrInlineRender: true,
	setup(__props) {
		const nuxtApp = useNuxtApp();
		nuxtApp.deferHydration();
		nuxtApp.ssrContext.url;
		const SingleRenderer = false;
		(0, vue_exports.provide)(PageRouteSymbol, useRoute());
		nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
		const error = useError();
		const abortRender = error.value && !nuxtApp.ssrContext.error;
		function invokeAppErrorHandler(err, target, info) {
			const errorHandler = nuxtApp.vueApp.config.errorHandler;
			if (errorHandler && !errorHandler.__nuxt_default) try {
				errorHandler(err, target, info);
			} catch (handlerError) {
				console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
			}
		}
		(0, vue_exports.onErrorCaptured)((err, target, info) => {
			nuxtApp.hooks.callHook("vue:error", err, target, info)?.catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
			{
				const p = nuxtApp.runWithContext(() => showError(err));
				(0, vue_exports.onServerPrefetch)(() => p);
				invokeAppErrorHandler(err, target, info);
				return false;
			}
		});
		const islandContext = nuxtApp.ssrContext.islandContext;
		return (_ctx, _push, _parent, _attrs) => {
			(0, server_renderer_exports.ssrRenderSuspense)(_push, {
				default: () => {
					if ((0, vue_exports.unref)(abortRender)) _push(`<div></div>`);
					else if ((0, vue_exports.unref)(error)) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(_sfc_main$1), { error: (0, vue_exports.unref)(error) }, null, _parent));
					else if ((0, vue_exports.unref)(islandContext)) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(IslandRenderer), { context: (0, vue_exports.unref)(islandContext) }, null, _parent));
					else if ((0, vue_exports.unref)(SingleRenderer)) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(SingleRenderer)), null, null), _parent);
					else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(app_default), null, null, _parent));
				},
				_: 1
			});
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/components/nuxt-root.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_0ad68da27ffb4c912162af2f4e3160f9/node_modules/nuxt/dist/app/entry.js
var entry = async function createNuxtAppServer(ssrContext) {
	const vueApp = (0, vue_exports.createApp)(_sfc_main);
	const nuxt = createNuxtApp({
		vueApp,
		ssrContext
	});
	try {
		await applyPlugins(nuxt, virtual_nuxt__nuxt_2Fplugins_server_default);
		await nuxt.hooks.callHook("app:created", vueApp);
	} catch (error) {
		await nuxt.hooks.callHook("app:error", error);
		nuxt.payload.error ||= createError$1(error);
	}
	if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) throw new Error("skipping render");
	return vueApp;
};
var entry_default = ((ssrContext) => entry(ssrContext));
//#endregion
export { entry_default as default, server_renderer_exports as i, NuxtLink as n, _sfc_main$13 as r, _plugin_vue_export_helper_default as t };

//# sourceMappingURL=server.mjs.map