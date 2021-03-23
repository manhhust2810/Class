import React, { Component } from 'react';
import FormDangKy from './FormDangKy';
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung';

class BaiTapQuanLyNguoiDung extends Component {
    render() {
        return (
            <div 
                className="container"
                >
                <FormDangKy />
                <TableDanhSachNguoiDung />
            </div>
        )
    }
}

export default BaiTapQuanLyNguoiDung;
