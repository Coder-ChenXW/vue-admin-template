import request from '@/utils/request'

export default {
    getPageList(pageNum,pageSize,searchObj) {
        return request({
          url: `/admin/hospital/${pageNum}/${pageSize}`,
          method: 'get',
          params:searchObj
        })
    },
    getChildList(pid) {
        return request({
          url: `/admin/cmn/childList/${pid}`,
          method: 'get'
        })
    },
   
    updateStatus(id,status) {
      return request({
        url: `/admin/hospital/${id}/${status}`,
        method: 'put'
      })
    },
    getHospById(id){
      return request({
        url: `/admin/hospital/detail/${id}`,
        method: 'get'
      })
    }
}
