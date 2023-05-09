import request from "@/utils/request";

/**
 * @desc 登录
 * @param {*} data
 * @returns
 */
export function login(data) {
  return request({
    url: "/admin/login",
    method: "post",
    data,
  });
}
/**
 * @desc 登出
 * @returns
 */
export function logout() {
  return request({
    url: "/admin/logout",
    method: "post",
  });
}
