		particlesJS.load('background-animation', 'particles-config.json', function() {
		  console.log('Particles loaded');
		});
        // 密碼顯示切換
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');

        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });

        // 登入功能
        function login() {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('error-message');
            const loading = document.getElementById('loading');
            const loginButton = document.querySelector('.btn');
            
            // 驗證輸入
            if (!username || !password) {
                showError('請填寫所有欄位');
                return;
            }

            // 顯示載入動畫
            loading.style.display = 'inline-block';
            loginButton.disabled = true;
            
             // 模擬API請求延遲
		setTimeout(() => {
			const users = [
				{ username: 'Avery', password: '1208', redirect: 'index.html' },
				{ username: 'jessica', password: '1223', redirect: 'index_2023.html' },
			];

			const user = users.find(u => u.username === username && u.password === password);

			if (user) {
				errorMessage.style.color = '#4CAF50';
				showError('登入成功！正在跳轉...');
				
				setTimeout(() => {
					window.location.href = user.redirect;
				}, 1500);
			} else {
				// 錯誤處理
				const usernameMatch = users.find(u => u.username.toLowerCase() === username.toLowerCase());
				if (usernameMatch) {
					if (usernameMatch.password !== password) {
						showError('密碼錯誤，請重新輸入！');
					} else if (usernameMatch.password.toLowerCase() === password.toLowerCase()) {
						showError('密碼大小寫錯誤，請檢查大小寫後重新輸入！');
					}
				} else {
					showError('使用者名稱或密碼錯誤，請重新輸入！');
				}
			}

			loading.style.display = 'none';
			loginButton.disabled = false;
		}, 1000);
	}

        function showError(message) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.innerText = message;
            errorMessage.classList.add('show');
            
            if (message.includes('成功')) {
                errorMessage.style.color = '#4CAF50';
            } else {
                errorMessage.style.color = '#ff4444';
            }

            // 新增抖動效果
            if (!message.includes('成功')) {
                errorMessage.classList.add('shake');
                setTimeout(() => {
                    errorMessage.classList.remove('shake');
                }, 500);
            }
        }

        // 鍵盤事件監聽
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                login();
            }
        });

        // 輸入框聚焦效果
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });