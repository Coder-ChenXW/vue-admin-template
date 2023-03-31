import request from '@/utils/request'

export default {
  getCountMap(searchObj) {
    return request({
      url: `/admin/statistic/countByDate`,
      method: 'get',
      params: searchObj
    })
  }

}

