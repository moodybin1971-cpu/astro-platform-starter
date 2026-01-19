
      <form name="hospital-booking" method="POST" action="/?success=true" data-netlify="true">
        <input type="hidden" name="form-name" value="hospital-booking" />

        <label>اسم المريض (ثلاثي):</label>
        <input type="text" name="patient_name" placeholder="أدخل الاسم الثلاثي" required />

        <label>الرقم القومي (14 رقم):</label>
        <input type="text" name="national_id" placeholder="أدخل 14 رقم" pattern="[0-9]{14}" required />

        <label>رقم التذكرة العلاجية:</label>
        <input type="text" name="ticket_number" placeholder="رقم التذكرة العلاجية" required />

        <label>يوم الحجز المطلوب:</label>
        <select name="appointment_day" required>
          <option value="">اختر اليوم...</option>
          <option>السبت</option><option>الأحد</option><option>الاثنين</option>
          <option>الثلاثاء</option><option>الأربعاء</option><option>الخميس</option>
        </select>

        <label>العيادة التخصصية:</label>
        <select name="clinic_type" required>
          <option value="">اختر العيادة...</option>
          <option>النفسية بالغين</option><option>إدمان بالغين</option><option>مراهقين نفسي</option>
          <option>مراهقين إدمان</option><option>أطفال</option><option>صحة المرأة</option>
          <option>واحة بالغين</option><option>واحة أطفال</option><option>خفض الضرر</option>
        </select>

        <button type="submit">تأكيد الحجز وإرسال الطلب</button>
      </form>

      <script is:inline>
        if (window.location.search.includes('success=true')) {
          alert('تم استلام طلب الحجز بنجاح! شكراً لك.');
        }
      </script>
