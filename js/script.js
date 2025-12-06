// ================= 1. DỮ LIỆU SẢN PHẨM =================
const products = [
  {
    id: 1,
    name: "Đầm dạ hội ren pha lê",
    price: 1590000,
    category: "nu",
    // SỬA: Đổi img thành images (mảng)
    images: [
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/01/02/4593f56cdee7a2be20c7d6dddf14200b.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/01/02/7cdf04f1a964f18eced247747b43c1d4.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/01/02/f7cea746b9677b82aac58908120c9683.webp",
    ],
  },
  {
    id: 2,
    name: "Đầm Tweed kem tay dài",
    price: 2150000,
    category: "nu",
    images: [
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/11/25/ff2c53007f86f98ebceb36a588ebccdb.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/11/25/123889bdec5cdd27d4fe94137a50b79e.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/11/25/717362e589a693bb5de400158fe08956.webp",
    ],
  },
  {
    id: 3,
    name: "Chân váy Muted Lavender",
    price: 990000,
    category: "nu",
    images: [
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/11/12/b9b1c30a0fedbffda6c44f61f040c674.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/11/12/f2494b0bb53e00b622c6924be06e8408.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/11/12/4634c232f8008d1fbfac07faa346d861.webp",
    ],
  },
  {
    id: 4,
    name: "Áo Vest Nam Classic",
    price: 3200000,
    category: "nam",
    images: [
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2020/10/16/fef35e66a86ff2874ca31acc8d4a439f.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2020/10/16/ab49c3221ec5256331aa6ad19d2a2da2.webp",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2020/10/17/484ea973a7e7e89dd2aa6fceea0cadb9.webp",
    ],
  },
  {
    id: 5,
    name: "Áo Polo Basic",
    price: 550000,
    category: "nam",
    images: [
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/04/17/713a714688783704535d480b5f8370b8.jpg",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/04/17/611cf2e2d8dfe79640a5a3ce36b8c225.jpg",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/04/17/c552dc1e2abb283e6ffc44f416dd5d93.jpg",
    ],
  },
  {
    id: 6,
    name: "Quần Tây Âu",
    price: 1250000,
    category: "nam",
    images: [
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/08/15/cc0ca7bd38aa831ff4a15148aad49948.jpg",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/01/16/577a47594a0dded319424cdcc34b8211.jpg",
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2025/01/16/0bbbb84d2885b2ab8f8982ddc681ff15.jpg",
    ],
  },
  {
    id: 7,
    name: "Đầm công chúa bé gái",
    price: 750000,
    category: "treem",
    img: "https://file.hstatic.net/200000569425/file/12_5.jpg",
  },
  {
    id: 8,
    name: "Bộ vest bé trai",
    price: 950000,
    category: "treem",
    img: "https://lh4.googleusercontent.com/2XDWM41oLEm3TEqSRK0Xn_jtMJBGQpftWbYHJpFP4TGWdSZxT2G8-Mrxz9fqWJh5wf-klNL1vkBQZbFShzUpvc7HBLDi2FVn6dDt4vfy7kpoheaoKRcHxgpgnKSHy-FagaDPMcJc",
  },
];

let cart = [];

// ================= 2. HIỂN THỊ SẢN PHẨM Ở TRANG CHỦ =================
function renderProducts(filterCategory) {
  const container = document.getElementById("productContainer");
  const title = document.getElementById("category-title");

  if (!container) return;

  container.innerHTML = "";

  let filteredData = products;
  if (filterCategory !== "all") {
    filteredData = products.filter((p) => p.category === filterCategory);
    if (title) {
      if (filterCategory === "nu") title.innerText = "THỜI TRANG NỮ";
      else if (filterCategory === "nam") title.innerText = "THỜI TRANG NAM";
      else title.innerText = "THỜI TRANG TRẺ EM";
    }
  } else {
    if (title) title.innerText = "TẤT CẢ SẢN PHẨM";
  }

  filteredData.forEach((product) => {
    const formattedPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(product.price);

    // XỬ LÝ ẢNH: Nếu có mảng images thì lấy ảnh đầu, nếu không thì lấy img cũ
    let displayImage = "";
    if (product.images && product.images.length > 0) {
      displayImage = product.images[0];
    } else {
      displayImage = product.img;
    }

    const html = `
           <div class="product-card">
                <div class="product-image">
                    <a href="product.html?id=${product.id}">
                        <img src="${displayImage}" alt="${product.name}">
                    </a>
                </div>
                <div class="product-info text-center">
                    <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
                    <div class="product-price">${formattedPrice}</div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Thêm vào giỏ</button>
                </div>
            </div>`;
    container.innerHTML += html;
  });
}

// ================= 3. XỬ LÝ TRANG CHI TIẾT =================
function loadProductDetail() {
  const mainImg = document.getElementById("mainImg");
  const thumbnailContainer = document.getElementById("thumbnailContainer"); // Lấy container

  if (!mainImg) return;

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = products.find((p) => p.id === productId);

  if (product) {
    document.getElementById("detail-name").innerText = product.name;
    document.getElementById("breadcrumb-name").innerText = product.name;
    document.getElementById("detail-price").innerText = new Intl.NumberFormat(
      "vi-VN",
      { style: "currency", currency: "VND" }
    ).format(product.price);
    document.getElementById("detail-id").innerText = product.id;
    if (product.category) {
      document.getElementById("detail-category").innerText =
        product.category.toUpperCase();
    }

    // --- XỬ LÝ ẢNH ---
    let imageList = [];
    // Kiểm tra xem dữ liệu dùng 'images' hay 'img'
    if (product.images && product.images.length > 0) {
      imageList = product.images;
    } else if (product.img) {
      imageList = [product.img];
    }

    // 1. Hiển thị ảnh lớn
    if (imageList.length > 0) {
      mainImg.src = imageList[0];
    }

    // 2. Tự động tạo ảnh nhỏ (Thumbnail)
    if (thumbnailContainer) {
      thumbnailContainer.innerHTML = ""; // Xóa ảnh cũ
      imageList.forEach((imgUrl, index) => {
        const thumb = document.createElement("img");
        thumb.src = imgUrl;
        // Thêm sự kiện click
        thumb.onclick = function () {
          changeImage(this);
        };
        thumbnailContainer.appendChild(thumb);
      });
    }

    const addBtn = document.getElementById("btn-add-to-cart");
    if (addBtn) {
      addBtn.onclick = function () {
        addToCart(product.id);
      };
    }
  } else {
    const container = document.querySelector(".product-detail-container");
    if (container) container.innerHTML = "<h2>Không tìm thấy sản phẩm!</h2>";
  }
}
// ================= 4. GIỎ HÀNG & CHỨC NĂNG CHUNG =================
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    alert("Sản phẩm đã có trong giỏ!");
  } else {
    cart.push(product);
    alert(`Đã thêm "${product.name}"`);
    updateCartUI();
  }
}

// ================= CẬP NHẬT HÀM HIỂN THỊ GIỎ HÀNG =================
function updateCartUI() {
  const cartCount = document.querySelector(".cart-count");
  const cartContainer = document.getElementById("cartItemsContainer");
  const cartTotal = document.getElementById("cartTotal");

  if (cartCount) cartCount.innerText = cart.length;
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p class="empty-msg">Giỏ hàng đang trống</p>';
    if (cartTotal) cartTotal.innerText = "0đ";
  } else {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.price);

      // --- SỬA LỖI ẢNH Ở ĐÂY ---
      // Ưu tiên lấy ảnh trong mảng images, nếu không có thì lấy img cũ
      let itemImage = "";
      if (item.images && item.images.length > 0) {
        itemImage = item.images[0];
      } else {
        itemImage = item.img;
      }

      cartContainer.innerHTML += `
        <div class="cart-item">
            <img src="${itemImage}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formattedPrice}</div>
                <div class="remove-item" onclick="removeFromCart(${index})">Xóa</div>
            </div>
        </div>`;
    });

    if (cartTotal)
      cartTotal.innerText = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total);
  }
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.querySelector(".overlay");
  if (sidebar) sidebar.classList.toggle("open");
  if (overlay) overlay.classList.toggle("active");
}

function changeImage(element) {
  const mainImg = document.getElementById("mainImg");
  if (mainImg) mainImg.src = element.src;
}

function increaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty) qty.value = parseInt(qty.value) + 1;
}
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty && qty.value > 1) qty.value = parseInt(qty.value) - 1;
}

function filterProducts(category) {
  renderProducts(category);
}

// ================= 5. CHATBOX =================
function toggleChatWindow() {
  const chatWindow = document.getElementById("chatWindow");
  if (!chatWindow) return;
  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "flex";
  } else {
    chatWindow.style.display = "none";
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  const messageText = input.value.trim();

  if (messageText !== "") {
    addMessage(messageText, "user-message");
    input.value = "";
    setTimeout(() => {
      botReply(messageText);
    }, 1000);
  }
}

function addMessage(text, className) {
  const chatBody = document.getElementById("chatBody");
  if (!chatBody) return;
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", className);
  messageDiv.innerText = text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function handleEnter(event) {
  if (event.key === "Enter") sendMessage();
}

function botReply(userText) {
  let botText = "";
  userText = userText.toLowerCase();
  if (userText.includes("xin chào") || userText.includes("hello")) {
    botText = "Chào bạn! Mình có thể giúp gì về size hay tư vấn sản phẩm ạ?";
  } else if (userText.includes("giá")) {
    botText = "Giá sản phẩm được niêm yết ngay trên website ạ.";
  } else {
    botText = "Cảm ơn bạn. Nhân viên sẽ liên hệ lại sớm!";
  }
  addMessage(botText, "bot-message");
  z;
}
// ================= 6. CHỨC NĂNG ĐĂNG NHẬP  =================

// 1. Ẩn/Hiện Popup
function toggleLoginPopup() {
  const overlay = document.getElementById("loginOverlay");
  const popup = document.getElementById("loginPopup");

  // Nếu đã đăng nhập thì hỏi đăng xuất
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    if (confirm("Bạn có muốn đăng xuất không?")) {
      logout();
    }
    return; // Không hiện popup đăng nhập nữa
  }

  // Nếu chưa đăng nhập thì hiện popup
  if (overlay && popup) {
    overlay.classList.toggle("active");
    popup.classList.toggle("active");
  }
}

// 2. Xử lý Đăng nhập
function handleLogin() {
  const userIn = document.getElementById("username").value;
  const passIn = document.getElementById("password").value;

  // Tài khoản cố định để test
  if (userIn === "admin" && passIn === "123456") {
    alert("Đăng nhập thành công!");

    // Lưu trạng thái vào bộ nhớ trình duyệt
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", "Admin"); // Lưu tên người dùng

    // Cập nhật giao diện và đóng popup
    checkLoginStatus();
    toggleLoginPopup();
  } else {
    alert("Sai tài khoản hoặc mật khẩu! (Thử: admin / 123456)");
  }
}

// 3. Xử lý Đăng xuất
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  alert("Đã đăng xuất!");
  checkLoginStatus(); // Reset lại giao diện
}

// 4. Kiểm tra trạng thái khi tải trang
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedName = localStorage.getItem("username");

  const userIcon = document.getElementById("user-icon");
  const userNameSpan = document.getElementById("user-name");

  if (isLoggedIn === "true" && userNameSpan) {
    // Nếu đã đăng nhập
    if (userIcon) userIcon.className = "fa fa-sign-out"; // Đổi icon thành nút thoát
    userNameSpan.innerText = "Hi, " + savedName;
    userNameSpan.style.display = "inline";
  } else {
    // Nếu chưa đăng nhập
    if (userIcon) userIcon.className = "fa fa-user"; // Trả về icon người
    if (userNameSpan) {
      userNameSpan.innerText = "";
      userNameSpan.style.display = "none";
    }
  }
}

// Logic chọn size
document.addEventListener("DOMContentLoaded", function () {
  const sizeBtns = document.querySelectorAll(".size-btn:not(.disabled)");
  if (sizeBtns.length > 0) {
    sizeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".size-btn.active").classList.remove("active");
        btn.classList.add("active");
      });
    });
  }

  // CHẠY CÁC HÀM KHỞI TẠO
  renderProducts("all");
  loadProductDetail();
  updateCartUI();
  checkLoginStatus();
});
