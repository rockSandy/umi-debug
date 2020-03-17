"use strict";

import { message } from "antd";

import buildUrl from "./build-url";

import { formatMessage } from "@/locales";


const commonHeaders = {
  Accept: "application/json"
};

const errorMap = {
  NOT_FOUND: "The resource you request is not found."
};

const trimParams = (params) => {
  for (const key in params) {
    if (typeof params[key] === "string") {
      params[key] = params[key].trim();
    }
    if (typeof params[key] === undefined) {
      delete params[key];
    }
  }
  return params;
};

const processError = (opt) => {
  const msg =
    opt.errorMessage || errorMap[opt.errorCode || ""] || formatMessage('request.networkError');
  message.warning(msg);
  return opt;
};

const verbs = {
  GET(url) {
    return fetch(url, {
      credentials: "include",
      headers: {
        ...commonHeaders
      }
    });
  },

  POST(url, params) {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        ...commonHeaders,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(trimParams(params))
    });
  },

  PATCH(url, params) {
    return fetch(url, {
      method: "PATCH",
      credentials: "include",
      headers: {
        ...commonHeaders,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(trimParams(params))
    });
  },

  DELETE(url) {
    return fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        ...commonHeaders
      }
    });
  }
};

const request = async (opt) => {
  let res;

  opt = buildUrl(opt);

  try {
    const url = (opt.host || "") + opt.path;
    res = await verbs[opt.method](url, opt.params);
  } catch (e) {
    return processError({
      success: false,
      errorMessage: e.message
    });
  }
  let data = {};
  if (res.ok) {
    try {
      data = await res.json();
      if (data.success === false && !opt.noToast) {
        processError(data);
      }
    } catch (_) {}
    return data;
  }

  if (res.status === 404) {
    return processError({
      success: false,
      errorCode: "NOT_FOUND"
    });
  }

  return processError({
    success: false,
    errorCode: "Network Error"
  });
};

export default request;

export const GET = async(
  path,
  options
) => {
  return await request({
    ...options,
    path,
    method: "GET"
  });
};

export const POST = async (
  path,
  params,
  options
) => {
  return await request({
    ...options,
    path,
    method: "POST",
    params
  });
};

export const PATCH = async (
  path,
  params,
  options
) => {
  return await request({
    ...options,
    path,
    method: "PATCH",
    params
  });
};

export const DELETE = async (
  path,
  options
) => {
  return await request({
    ...options,
    path,
    method: "DELETE"
  });
};
