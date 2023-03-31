import request from '@/utils/request'

export default {
  getSchedulePage(pageNum, pageSize, hoscode, depcode) {
    return request({
      url: `/admin/hosp/schedule/${pageNum}/${pageSize}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  getScheduleDetail(hoscode, depcode, workdate) {
    return request({
      url: `/admin/hosp/schedule/${hoscode}/${depcode}/${workdate}`,
      method: 'get'
    })
  }
}

