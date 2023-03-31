import request from '@/utils/request'

const API = '/administrator/userinfo'

export default {
  getUserInfoPage(pageNum, limit, searchObj) {
    return request({
      url: `${API}/${pageNum}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 修改用户状态
  updateStatus(id, status) {
    return request({
      url: `${API}/${id}/${status}`,
      method: 'put'
    })
  },
  detail(id) {
    return request({
      url: `${API}/detail/${id}`,
      method: 'get'
    })
  },
  approval(id, authStatus) {
    return request({
      url: `${API}/auth/${id}/${authStatus}`,
      method: 'put'
    })
  }

}

