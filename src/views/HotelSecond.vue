<template>
    <div class="page">

        <!-- 顶部背景图 -->
        <div class="hero-bg"></div>

        <!-- 页面顶部导航 -->
        <header class="navbar">
            <div class="left">
                <div class="logo">TicketMaster</div>
                <nav>
                    <a>Home</a>
                    <a>Events</a>
                    <a>Attractions</a>
                    <a>Categories</a>
                    <a>Contact</a>
                </nav>
            </div>
            <button class="signin">Sign In</button>
        </header>

        <!-- 页面主体 -->
        <div class="content">

            <!-- 左侧卡片 -->
            <div class="card event-card">
                <div class="badge">Live Concert</div>
                <h1>Starlight Music Festival 2024</h1>

                <div class="info-group">
                    <div class="info-item">
                        <div class="label">Date</div>
                        <div class="value">August 15, 2024</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Time</div>
                        <div class="value">Doors at 6:00 PM</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Venue</div>
                        <div class="value">Grand Park Arena, LA</div>
                    </div>
                </div>

                <h2>About the Event</h2>
                <p>
                    Join us for an unforgettable night under the stars! The Starlight Music Festival brings
                    together the biggest names in pop and electronic music for a one-of-a-kind experience.
                </p>

                <h2>Important Notes</h2>
                <ul class="notes">
                    <li>This is an 18+ event. A valid government-issued ID is required for entry.</li>
                    <li>Professional cameras and recording devices are not permitted.</li>
                    <li>Bags larger than 12"x12" are not allowed.</li>
                </ul>
            </div>

            <!-- 右侧购票卡片 -->
            <div class="card ticket-card">
                <h2>Book Your Tickets</h2>
                <div class="ticket-row">
                    <div>
                        <div class="tname">Standard Admission</div>
                        <div class="tsub">General access.</div>
                    </div>
                    <div class="tprice">$89.99</div>
                </div>

                <div class="ticket-row vip">
                    <div>
                        <div class="tname">VIP Pass</div>
                        <div class="tsub">Front-stage access & lounge.</div>
                    </div>
                    <div class="tprice">$199.99</div>
                </div>

                <div class="summary">
                    <div class="sum-row">
                        <span>Standard (2 × $89.99)</span>
                        <span>$179.98</span>
                    </div>
                    <div class="sum-row">
                        <span>Service Fee</span><span>$15.50</span>
                    </div>
                    <div class="sum-row total">
                        <span>Total Price</span><span>$195.48</span>
                    </div>
                </div>

                <button class="book-btn">Book Now</button>
                <p class="checkout-note">Secure checkout. All sales are final.</p>
            </div>

        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
/* 整体页面结构 */
.page {
    width: 100%;
    /* min-height: 100vh; */
    position: relative;
    background: #f7f9fc;
}

/* 顶部背景图（重点！与截图一致） */
.hero-bg {
    width: 100%;
    height: 420px;
    background-image: url('@/assets/Hotel/7.png');
    /* ← 你的大背景图 */
    background-size: cover;
    background-position: center top;
    filter: brightness(0.75);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

/* 顶部导航 */
.navbar {
    position: relative;
    z-index: 10;
    padding: 25px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.navbar .left {
    display: flex;
    align-items: center;
    gap: 40px;
}

.navbar nav a {
    margin-right: 25px;
    cursor: pointer;
    opacity: 0.9;
}

/* Sign In 按钮 */
.signin {
    padding: 8px 20px;
    border-radius: 20px;
    border: none;
    background: white;
    color: #111;
    cursor: pointer;
}

/* 内容区域 */
.content {
    position: relative;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    max-width: 1250px;
    margin: 120px auto 40px;
}

/* 卡片样式（两边一样） */
.card {
    background: white;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

/* 左卡片 */
.event-card {
    width: 65%;
}

/* Blue badge */
.badge {
    display: inline-block;
    background: #e2edff;
    color: #346aff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 14px;
    margin-bottom: 18px;
    font-weight: 500;
}

/* 信息三格 */
.info-group {
    display: flex;
    gap: 20px;
    margin: 25px 0;
}

.info-item {
    background: #f3f6fa;
    padding: 16px;
    border-radius: 12px;
    flex: 1;
}

.label {
    font-size: 13px;
    color: #6b7280;
}

.value {
    margin-top: 4px;
    font-weight: bold;
    font-size: 15px;
}

/* Notes */
.notes {
    margin-top: 10px;
    padding-left: 20px;
    line-height: 1.6;
}

/* 右侧购票卡 */
.ticket-card {
    width: 32%;
}

/* Ticket Row */
.ticket-row {
    border: 1px solid #e5e7eb;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 12px;
}

.tname {
    font-weight: bold;
}

.tsub {
    font-size: 13px;
    color: #6b7280;
}

.tprice {
    font-weight: bold;
    font-size: 18px;
}

/* Summary 费用总结 */
.summary {
    border-top: 1px solid #e5e7eb;
    margin-top: 18px;
    padding-top: 18px;
}

.sum-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.total {
    font-weight: bold;
}

/* Book Now 按钮 */
.book-btn {
    width: 100%;
    background: #3b82f6;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 18px;
    cursor: pointer;
}

.checkout-note {
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    margin-top: 6px;
}
</style>
