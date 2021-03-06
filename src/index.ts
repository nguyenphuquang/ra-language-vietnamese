import { TranslationMessages } from 'ra-core';

const englishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Thêm bộ lọc',
            add: 'Thêm',
            back: 'Quay lại',
            bulk_actions: 'Đã chọn 1 mục |||| Đã chọn %{smart_count} mục',
            cancel: 'Huỷ',
            clear_input_value: 'Xoá',
            clone: 'Nhân bản',
            confirm: 'Xác nhận',
            create: 'Tạo mới',
            delete: 'Xoá',
            edit: 'Sửa',
            export: 'Xuất',
            list: 'Danh sách',
            refresh: 'Làm mới',
            remove_filter: 'Bỏ bộ lọc này',
            remove: 'Xoá',
            save: 'Lưu lại',
            search: 'Tìm kiếm',
            show: 'Hiển thị',
            sort: 'Sắp xếp',
            undo: 'Undo',
            unselect: 'Bỏ chọn',
            expand: 'Mở rộng',
            close: 'Đóng',
            open_menu: 'Mở menu',
            close_menu: 'Đóng menu',
        },
        boolean: {
            true: 'Có',
            false: 'Không',
            null: '',
        },
        page: {
            create: 'Tạo mới %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: 'Có lỗi xảy ra',
            list: '%{name}',
            loading: 'Đang tải',
            not_found: 'Không tìm thấy',
            show: '%{name} #%{id}',
            empty: 'Chưa có %{name} nào.',
            invite: 'Bạn có muốn tạo mới?',
        },
        input: {
            file: {
                upload_several:
                    'Kéo nhiều file thả vào đây để tải lên. Click vào để tải lên 1 file',
                upload_single: 'Kéo file thả vào đây hoặc click vào để tải lên 1 file',
            },
            image: {
                upload_several:
                    'Kéo nhiều ảnh thả vào đây để tải lên. Click vào để tải lên 1 ảnh',
                upload_single: 'Kéo file thả vào đây hoặc click vào để tải lên 1 ảnh',
            },
            references: {
                all_missing: 'Không tìm thấy dữ liệu tham chiếu.',
                many_missing:
                    'Dữ liệu liên kết không tồn tại.',
                single_missing:
                    'Dữ liệu liên kết không tồn tại.',
            },
            password: {
                toggle_visible: 'Ẩn mật khẩu',
                toggle_hidden: 'Hiện mật khẩu',
            },
        },
        message: {
            about: 'Giới thiệu',
            are_you_sure: 'Bạn có chắc chắn?',
            bulk_delete_content:
                'Bạn có chắc chắn muốn xoá %{name} này? |||| Bạn có chắc chắn muốn xoá %{smart_count} mục này?',
            bulk_delete_title:
                'Xoá %{name} |||| Xoá %{smart_count} %{name}',
            delete_content: 'Bạn có chắc chắn muốn xoá mục này?',
            delete_title: 'Xoá %{name} #%{id}',
            details: 'Chi tiết',
            error:
                "Có lỗi xảy ra. Yêu cầu của bạn không thể hoàn thành được.",
            invalid_form: 'Form này không hợp lệ. Hãy kiểm tra những lỗi được thông báo',
            loading: 'Đang tải trang, hãy đợi một chút.',
            no: 'Không',
            not_found:
                'Có thể bạn gõ sai URL hoặc click vào một liên kết sai.',
            yes: 'Có',
            unsaved_changes:
                "Một số thay đổ của bạn chưa được lưu lại. Bạn có chắc chắn muốn bỏ qua không?",
        },
        navigation: {
            no_results: 'Không tìm thấy kết quả nào',
            no_more_results:
                'Trang số %{page} đã vượt quá số trang. Hãy thử lại với trang trước.',
            page_out_of_boundaries: 'Trang số %{page} vượt quá số trang',
            page_out_from_end: 'Đã đến trang cuối',
            page_out_from_begin: 'Đã đến trang đầu',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: 'Số dòng / trang:',
            next: 'Sau',
            prev: 'Trước',
        },
        sort: {
            sort_by: 'Sắp xếp theo %{field} %{order}',
            ASC: 'tăng dần',
            DESC: 'giảm dần',
        },
        auth: {
            auth_check_error: 'Hãy đăng nhập để tiếp tục',
            user_menu: 'Thông tin người dùng',
            username: 'Tên đăng nhập',
            password: 'Mật khẩu',
            sign_in: 'Đăng nhập',
            sign_in_error: 'Đăng nhập không thành công, hãy thử lại',
            logout: 'Đăng xuất',
        },
        notification: {
            updated: 'Bản ghi đã được cập nhật |||| %{smart_count} bản ghi đã được cập nhật',
            created: 'Bản ghi đã được tạo',
            deleted: 'Đã xoá bản ghi |||| Đã xoá %{smart_count} bản ghi',
            bad_item: 'Bản ghi lỗi',
            item_doesnt_exist: 'Bản ghi không tồn tại',
            http_error: 'Không liên kết được với máy chủ',
            data_provider_error:
                'Lỗi dataProvider. Kiểm tra console để biết chi tiết.',
            i18n_error:
                'Không thể tải bản dịch cho ngôn ngữ này',
            canceled: 'Đã huỷ hành động',
            logged_out: 'Phiên làm việc của bạn đã kết thúc, hãy đăng nhập lại.',
        },
        validation: {
            required: 'Phải nhập',
            minLength: 'Tối thiểu %{min} ký tự',
            maxLength: 'Tối đa %{max} ký tự',
            minValue: 'Không nhỏ hơn %{min}',
            maxValue: 'Không lớn hơn %{max}',
            number: 'Phải nhập số',
            email: 'Phải nhập email',
            oneOf: 'Phải là 1 trong các giá trị: %{options}',
            regex: 'Phải theo cấu trúc (regexp): %{pattern}',
        },
    },
};

export default englishMessages;
