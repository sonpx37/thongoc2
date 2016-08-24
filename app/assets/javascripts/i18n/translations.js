var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","in_between":"must be in between %{min} and %{max}","spoofed_media_type":"has an extension that does not match its contents","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"update":{"notice":"%{resource_name} was successfully updated."},"destroy":{"notice":"%{resource_name} was successfully destroyed.","alert":"%{resource_name} could not be destroyed."}}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","locked":"Your account is locked.","last_attempt":"You have one more attempt before your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"},"password_change":{"subject":"Password Changed"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully.","new":{"password":"Password","password_confirmation":"Confirm Password","password_confirmation_placeholder":"Confirm","location":"Language","already_have":"Already have an account? ","login":"Log In","sign_up_new":"Sign Up"}},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully.","already_signed_out":"Signed out successfully.","new":{"please_log_in":"Log into your account","password":"Password","email_address":"Email address","forgot_password":"Forgot password?","sign_up":"Sign Up","no_account":"Don't have an account yet? ","remember_me":"Remember me"}},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"defaults":{"continue":"Tiếp tục"},"layouts":{"header":{"sign_in":"Đăng Nhập","sign_up":"Đăng Ký","home_page":"Trang Chủ","introduce":"Giới thiệu","education_program":"Chương Trình Giảng Dạy","recruitment":"Tuyển Dụng","profile":"Trang Cá Nhân","log_out":"Thoát","library":"Thư Viện Hình Ảnh","admissions":"Tuyển Sinh","contact_us":"Liên Hệ","student":"Góc Của Bé","parent":"Góc Phụ Huynh"},"footer":{"faqs":"Câu Hỏi Thường Gặp","contact_us":"Liên Hệ","terms_of_service":"Điều Khoản","address":"Địa chỉ: Gần chợ dĩ an 2, ấp Bình Đường 1, Dĩ An, Bình Dương","phone_number":"Điện thoại: 01677450261","email":"Email: mamnonthongoc@gmail.com","share":"Chia Sẻ Liên Kết","share_facebook":"Facebook","share_google_plus":"Google +","address_map":"Địa Chỉ Liên hệ"}},"home":{"index":{"title":"Mầm non thỏ ngọc","description":"Trường Mầm non Thỏ Ngọc. Gần chợ dĩ an 2, bình đường, dĩ an, bình dương","keywords":"mam non, truong mam non, mam non tho ngoc, mam non di an, mam non di an 2, tieng anh mam non, nhac thieu nhi, giai tri cho tre, giao duc tre, dinh duong tre em,chua cac benh tre em thuong gap, giao an mam non","admissions_inform":""}},"admissions":{"tuyen_sinh":{"thong_bao":"Thông báo tuyển sinh","nam_hoc":"Năm học 2016-2017","do_tuoi":"Trường Mầm non Thỏ Ngọc thông báo kế hoạch tuyển sinh của nhà trường ở các độ tuổi như sau:","doi_tuong":" I. Đối tượng tuyển sinh:","do_tuoi_nha_tre":"Nhà trường  tuyển sinh các cháu ở độ tuổi nhà trẻ từ 13 –  36 tháng ","do_tuoi_mau_giao":" Mẫu giáo 3 – 5 tuổi.","thoi_gian_nhap_hoc":" II. Thời gian phát và nhận hồ sơ – Ngày nhập học:","noi_nhan_ho_so":"Phụ huynh nhận hồ sơ tại văn phòng trường .","thoi_gian_nhan_hs":" Thời gian thu nhận hồ sơ:","nhap_hoc_moi_ngay":"Nhận hồ sơ nhập học mỗi ngày.","nhan_hs_tai_vp":"Phụ huynh nộp hồ sơ nhập học cho bé tại văn phòng trường vào các ngày trong tuần.","ngay_nhap_hoc":"Sau khi hoàn tất hồ sơ và đóng học phí, các bé sẽ vào học trong ngày hôm sau.","ke_hoach_tuyen_sinh":"Trên đây là kế hoạch tuyển sinh của nhà trường, kính thông báo đến các bậc phụ huynh được rõ, rất mong được đón tiếp các quý phụ huynh.","bo_phan_tuyen_sinh":" BỘ PHẬN TUYỂN SINH "}}}};