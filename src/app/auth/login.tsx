import { useSession } from "@context/store"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {

  const { login } = useSession();
  const [loginLayout, setLoginLayout] = useState<boolean>(true)

  const switchLayout = () => {
	setLoginLayout(!loginLayout)
  }

  return (
    <div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
					<div className="col-md-7 col-md-push-5">
						<div className="booking-cta">
							<h1>Make your reservation</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
								ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
								Perspiciatis.
							</p>
						</div>
					</div>
					<div className="col-md-4 col-md-pull-7">
						<div className="outerDivFull" >
							<div className="switchToggle">
								<input type="checkbox" onClick={switchLayout} id="switch"/>
								<label htmlFor="switch">Toggle</label>
							</div>
						</div>
						<div className="form-container" style={{ height: '25rem' }}>
							<AnimatePresence mode="wait">
							{loginLayout ? (
								<FormLogin login={login} />
							) : (
								<FormRegister/>
							)}
							</AnimatePresence>
						</div>
						</div>
				</div>
			</div>
		</div>
	</div>
  )
}

function FormLogin({ login }: { login: () => void }) {
	return (
		<motion.div
			key="login"
			className="booking-form"
			initial={{ rotateY: -180, opacity: 0 }}
			animate={{ rotateY: 0, opacity: 1 }}
			// exit={{ rotateY: 180, opacity: 0 }}
			transition={{ duration: 0.8 }}
			>
			<h4>Login</h4>
			<form>
				<div className="form-group">
				<span className="form-label">Email</span>
				<input className="form-control" type="email" required />
				</div>
				<div className="form-group">
				<span className="form-label">Password</span>
				<input className="form-control" type="password" required />
				</div>
				<div className="form-btn">
				<button
					type="button"
					onClick={login}
					className="btn btn-primary w-100"
				>
					Login
				</button>
				</div>
			</form>
		</motion.div>
	)
}

function FormRegister() {
	return (
		<motion.div
		key="register"
		className="booking-form"
		initial={{ rotateY: 180, opacity: 0 }}
		animate={{ rotateY: 0, opacity: 1 }}
		// exit={{ rotateY: -180, opacity: 0 }}
		transition={{ duration: 0.8 }}
		>
		<h4>Register</h4>
		<form>
			<div className="form-group">
			<span className="form-label">Email</span>
			<input className="form-control" type="email" required />
			</div>
			<div className="row">
			<div className="form-group col-md-6">
			<span className="form-label">Devisi</span>
			<input className="form-control" type="password" required />
			</div>
			<div className="form-group col-md-6">
			<span className="form-label">Role</span>
			<input className="form-control" type="password" required />
			</div>
			</div>
			<div className="row">
			<div className="form-group col-md-6">
			<span className="form-label">Password</span>
			<input className="form-control" type="password" required />
			</div>
			<div className="form-group col-md-6">
			<span className="form-label">Confirm Password</span>
			<input className="form-control" type="password" required />
			</div>
			</div>
			<div className="form-btn">
			<button
				type="button"
				onClick={() => alert('Belum tersedia')}
				className="btn btn-primary w-100"
			>
				Register
			</button>
			</div>
		</form>
		</motion.div>
	)
}