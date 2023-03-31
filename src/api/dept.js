import request from '@/utils/request'

export default {
    getDepartmentList(hoscode) {
        return request({
          url: `/admin/hosp/department/${hoscode}`,
          method: 'get'
        })
      }
}
