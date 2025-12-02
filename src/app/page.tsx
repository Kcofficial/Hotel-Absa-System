'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  Upload, 
  Database, 
  Brain, 
  FileText, 
  Settings, 
  Menu,
  X,
  Home,
  TrendingUp,
  Eye,
  Loader2
} from 'lucide-react'

export default function HotelABSADashboard() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sidebarItems = [
    {
      id: 'dashboard',
      label: 'Dashboard Utama',
      icon: Home,
      description: 'Ringkasan analisis sentimen dan metrik utama'
    },
    {
      id: 'upload',
      label: 'Upload Data',
      icon: Upload,
      description: 'Upload file Excel ulasan hotel dari Traveloka'
    },
    {
      id: 'analysis',
      label: 'Analisis Sentimen',
      icon: BarChart3,
      description: 'Hasil analisis ABSA dengan visualisasi lengkap'
    },
    {
      id: 'xai',
      label: 'Explainable AI',
      icon: Brain,
      description: 'Interpretasi model dengan SHAP dan LIME'
    },
    {
      id: 'data',
      label: 'Manajemen Data',
      icon: Database,
      description: 'Kelola dan filter data ulasan hotel'
    },
    {
      id: 'reports',
      label: 'Laporan',
      icon: FileText,
      description: 'Export laporan PDF dan Excel'
    },
    {
      id: 'insights',
      label: 'Business Insights',
      icon: TrendingUp,
      description: 'Rekomendasi strategis berbasis AI'
    }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardContent />
      case 'upload':
        return <UploadContent />
      case 'analysis':
        return <AnalysisContent />
      case 'xai':
        return <XAIContent />
      case 'data':
        return <DataContent />
      case 'reports':
        return <ReportsContent />
      case 'insights':
        return <InsightsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              {sidebarOpen && (
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Hotel ABSA</h1>
                  <p className="text-xs text-gray-500">AI-Powered Analytics</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                )}
              </button>
            )
          })}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>Version 1.0.0</p>
              <p>© 2025 Hotel ABSA System</p>
              <p className="mt-2 font-medium">Developed by:</p>
              <p>Dedi Kundana, S.Pd., M.T.I.</p>
              <p>Program Studi Doktor Manajemen Teknologi</p>
              <p>Institut Teknologi Sepuluh Nopember</p>
              <p className="mt-2 font-medium">Based on:</p>
              <p>• BERTopic</p>
              <p>• RoBERTa</p>
              <p>• Explainable AI</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {sidebarItems.find(item => item.id === activeSection)?.label}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {sidebarItems.find(item => item.id === activeSection)?.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                System Online
              </span>
              <button className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Ulasan</p>
              <p className="text-2xl font-bold text-gray-900">12,456</p>
              <p className="text-xs text-green-600">+20.1% dari bulan lalu</p>
            </div>
            <Database className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sentimen Positif</p>
              <p className="text-2xl font-bold text-green-600">68.5%</p>
              <p className="text-xs text-green-600">+5.2% dari bulan lalu</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sentimen Negatif</p>
              <p className="text-2xl font-bold text-red-600">18.2%</p>
              <p className="text-xs text-red-600">-3.1% dari bulan lalu</p>
            </div>
            <BarChart3 className="w-8 h-8 text-red-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Akurasi Model</p>
              <p className="text-2xl font-bold text-purple-600">94.2%</p>
              <p className="text-xs text-gray-600">Hybrid BERTopic-RoBERTa</p>
            </div>
            <Brain className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Recent Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analisis Aspek Terkini</h3>
          <p className="text-sm text-gray-600 mb-4">Perbandingan sentimen per aspek layanan hotel</p>
          <div className="space-y-4">
            {[
              { aspect: 'Kebersihan', positive: 72, negative: 18 },
              { aspect: 'Layanan', positive: 68, negative: 22 },
              { aspect: 'Kenyamanan', positive: 65, negative: 25 },
              { aspect: 'Makanan', positive: 70, negative: 20 },
              { aspect: 'Lokasi', positive: 85, negative: 10 }
            ].map((item) => (
              <div key={item.aspect} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{item.aspect}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${item.positive}%` }}
                    />
                  </div>
                  <span className="text-xs text-green-600">{item.positive}%</span>
                  <span className="text-xs text-red-600">{item.negative}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Insight AI</h3>
          <p className="text-sm text-gray-600 mb-4">Rekomendasi otomatis berbasis analisis mendalam</p>
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Perhatikan Aspek Kenyamanan</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    Sentimen negatif pada aspek kenyamanan meningkat 15%. Fokus pada peningkatan kualitas tempat tidur dan suhu ruangan.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800">Lokasi Unggulan</p>
                  <p className="text-xs text-green-700 mt-1">
                    Aspek lokasi mendapat rating tertinggi (85%). Manfaatkan sebagai keunggulan kompetitif dalam marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Model Update</p>
                  <p className="text-xs text-blue-700 mt-1">
                    Model AI telah dilatih dengan 1,000 ulasan baru. Akurasi meningkat 2.3%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Upload Content Component
function UploadContent() {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [uploadResult, setUploadResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    setError(null)
    setUploading(true)
    setProgress(0)

    const formData = new FormData()
    formData.append('file', file)

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      clearInterval(progressInterval)
      setProgress(100)

      const result = await response.json()
      
      if (response.ok && result.success) {
        setUploadResult(result)
      } else {
        setError(result.message || 'Upload failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setUploading(false)
      setTimeout(() => setProgress(0), 1000)
    }
  }

  const resetUpload = () => {
    setUploadResult(null)
    setError(null)
    setProgress(0)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Data Ulasan Hotel</h3>
        <p className="text-sm text-gray-600 mb-6">
          Upload file Excel yang berisi data ulasan hotel dari platform Traveloka untuk analisis sentimen berbasis aspek
        </p>
        
        {!uploadResult && !uploading && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">Upload Excel File</p>
            <p className="text-sm text-gray-500 mb-4">
              Pilih file Excel yang berisi data ulasan hotel (.xlsx, .xls)
            </p>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              disabled={uploading}
            />
            <label 
              htmlFor="file-upload" 
              className={`inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer ${
                uploading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {uploading ? 'Processing...' : 'Choose File'}
            </label>
          </div>
        )}

        {uploading && (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Memproses analisis AI...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Sedang menganalisis ulasan dengan BERTopic, RoBERTa, dan Explainable AI...
            </p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-red-600">⚠</span>
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {uploadResult && (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <p className="text-green-800">{uploadResult.message}</p>
              </div>
            </div>

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold">{uploadResult.data?.totalReviews}</div>
                <p className="text-sm text-gray-600">Total Ulasan</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {uploadResult.data?.statistics.overall.positive}%
                </div>
                <p className="text-sm text-gray-600">Sentimen Positif</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {uploadResult.data?.statistics.overall.negative}%
                </div>
                <p className="text-sm text-gray-600">Sentimen Negatif</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {uploadResult.data?.processedReviews}
                </div>
                <p className="text-sm text-gray-600">Berhasil Diproses</p>
              </div>
            </div>

            <button 
              onClick={resetUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Upload File Baru
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Petunjuk Upload</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✓</span>
            <div>
              <p className="font-medium">Format File</p>
              <p className="text-gray-600">Excel (.xlsx, .xls) dengan kolom ulasan pelanggan</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✓</span>
            <div>
              <p className="font-medium">Bahasa</p>
              <p className="text-gray-600">Ulasan dalam bahasa Indonesia untuk hasil analisis optimal</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✓</span>
            <div>
              <p className="font-medium">Kualitas Data</p>
              <p className="text-gray-600">Pastikan ulasan lengkap dan relevan dengan layanan hotel</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✓</span>
            <div>
              <p className="font-medium">Proses AI</p>
              <p className="text-gray-600">Analisis menggunakan BERTopic, RoBERTa, dan Explainable AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Analysis Content Component
function AnalysisContent() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d')
  const [selectedAspect, setSelectedAspect] = useState('all')

  const sentimentData = [
    { date: '2025-01-01', positive: 65, negative: 20, neutral: 15 },
    { date: '2025-01-02', positive: 68, negative: 18, neutral: 14 },
    { date: '2025-01-03', positive: 70, negative: 16, neutral: 14 },
    { date: '2025-01-04', positive: 72, negative: 15, neutral: 13 },
    { date: '2025-01-05', positive: 69, negative: 17, neutral: 14 },
    { date: '2025-01-06', positive: 71, negative: 16, neutral: 13 },
    { date: '2025-01-07', positive: 73, negative: 14, neutral: 13 }
  ]

  const aspectComparison = [
    { aspect: 'Kebersihan', positive: 72, negative: 18, neutral: 10, total: 245 },
    { aspect: 'Layanan', positive: 68, negative: 22, neutral: 10, total: 198 },
    { aspect: 'Kenyamanan', positive: 65, negative: 25, neutral: 10, total: 187 },
    { aspect: 'Makanan', positive: 70, negative: 20, neutral: 10, total: 156 },
    { aspect: 'Lokasi', positive: 85, negative: 10, neutral: 5, total: 234 }
  ]

  const keywordAnalysis = [
    { keyword: 'bersih', count: 145, sentiment: 'positive', aspect: 'Kebersihan' },
    { keyword: 'ramah', count: 132, sentiment: 'positive', aspect: 'Layanan' },
    { keyword: 'nyaman', count: 128, sentiment: 'positive', aspect: 'Kenyamanan' },
    { keyword: 'strategis', count: 98, sentiment: 'positive', aspect: 'Lokasi' },
    { keyword: 'enak', count: 87, sentiment: 'positive', aspect: 'Makanan' },
    { keyword: 'kotor', count: 45, sentiment: 'negative', aspect: 'Kebersihan' },
    { keyword: 'lambat', count: 38, sentiment: 'negative', aspect: 'Layanan' },
    { keyword: 'panas', count: 32, sentiment: 'negative', aspect: 'Kenyamanan' }
  ]

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Analisis Sentimen Berbasis Aspek</h3>
            <p className="text-sm text-gray-600">Hasil analisis menggunakan arsitektur hybrid BERTopic-RoBERTa-XAI</p>
          </div>
          <div className="flex gap-2">
            <select 
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="7d">7 Hari Terakhir</option>
              <option value="30d">30 Hari Terakhir</option>
              <option value="90d">90 Hari Terakhir</option>
            </select>
            <select 
              value={selectedAspect}
              onChange={(e) => setSelectedAspect(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Semua Aspek</option>
              <option value="kebersihan">Kebersihan</option>
              <option value="layanan">Layanan</option>
              <option value="kenyamanan">Kenyamanan</option>
              <option value="makanan">Makanan</option>
              <option value="lokasi">Lokasi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sentiment Trend Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tren Sentimen (7 Hari Terakhir)</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {sentimentData.map((data, index) => (
            <div key={data.date} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col gap-1">
                <div 
                  className="bg-green-500 rounded-t" 
                  style={{ height: `${data.positive * 2}px` }}
                  title={`Positif: ${data.positive}%`}
                />
                <div 
                  className="bg-gray-400" 
                  style={{ height: `${data.neutral * 2}px` }}
                  title={`Netral: ${data.neutral}%`}
                />
                <div 
                  className="bg-red-500 rounded-b" 
                  style={{ height: `${data.negative * 2}px` }}
                  title={`Negatif: ${data.negative}%`}
                />
              </div>
              <span className="text-xs text-gray-600">
                {new Date(data.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">Positif</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span className="text-sm text-gray-600">Netral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-sm text-gray-600">Negatif</span>
          </div>
        </div>
      </div>

      {/* Aspect Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Perbandingan per Aspek</h3>
          <div className="space-y-4">
            {aspectComparison.map((aspect) => (
              <div key={aspect.aspect} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{aspect.aspect}</span>
                  <span className="text-sm text-gray-600">{aspect.total} ulasan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="flex h-full">
                      <div 
                        className="bg-green-500" 
                        style={{ width: `${aspect.positive}%` }}
                        title={`Positif: ${aspect.positive}%`}
                      />
                      <div 
                        className="bg-gray-400" 
                        style={{ width: `${aspect.neutral}%` }}
                        title={`Netral: ${aspect.neutral}%`}
                      />
                      <div 
                        className="bg-red-500" 
                        style={{ width: `${aspect.negative}%` }}
                        title={`Negatif: ${aspect.negative}%`}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-green-600">+{aspect.positive}%</span>
                    <span className="text-red-600">-{aspect.negative}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Analysis */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analisis Keyword</h3>
          <div className="space-y-3">
            {keywordAnalysis.map((keyword) => (
              <div key={keyword.keyword} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${
                    keyword.sentiment === 'positive' ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  <div>
                    <span className="font-medium text-gray-900">{keyword.keyword}</span>
                    <span className="text-xs text-gray-500 ml-2">{keyword.aspect}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{keyword.count} kali</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    keyword.sentiment === 'positive' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {keyword.sentiment === 'positive' ? 'Positif' : 'Negatif'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Performance */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performa Model Hybrid</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">94.2%</div>
            <p className="text-sm text-gray-600 mt-1">Akurasi Overall</p>
            <p className="text-xs text-gray-500">BERTopic + RoBERTa + XAI</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">92.8%</div>
            <p className="text-sm text-gray-600 mt-1">Precision</p>
            <p className="text-xs text-gray-500">Klasifikasi Aspek</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">89.5%</div>
            <p className="text-sm text-gray-600 mt-1">Recall</p>
            <p className="text-xs text-gray-500">Deteksi Sentimen</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Kontribusi Model</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">BERTopic (Topic Modeling)</span>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-sm text-gray-900">85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">RoBERTa (Sentiment Classification)</span>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="text-sm text-gray-900">92%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">XAI (Explainability)</span>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="text-sm text-gray-900">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function XAIContent() {
  const [selectedReview, setSelectedReview] = useState('review_1')
  const [selectedMethod, setSelectedMethod] = useState('shap')

  const sampleReviews = [
    {
      id: 'review_1',
      text: 'Hotel sangat bersih dan nyaman, pelayanan staf ramah dan profesional. Lokasi strategis dekat dengan pusat kota.',
      sentiment: 'POSITIF',
      confidence: 95
    },
    {
      id: 'review_2',
      text: 'Kamar kotor dan AC tidak dingin, sangat kecewa dengan pelayanan yang lambat. Sarapan juga kurang variatif.',
      sentiment: 'NEGATIF',
      confidence: 88
    },
    {
      id: 'review_3',
      text: 'Fasilitas hotel lengkap, kolam renang bersih, gym memadai. Staf sangat helpfull dan responsif.',
      sentiment: 'POSITIF',
      confidence: 92
    }
  ]

  const shapValues = [
    { word: 'Hotel', value: 0.02, color: 'bg-gray-300' },
    { word: 'sangat', value: 0.15, color: 'bg-green-400' },
    { word: 'bersih', value: 0.25, color: 'bg-green-500' },
    { word: 'dan', value: 0.01, color: 'bg-gray-300' },
    { word: 'nyaman', value: 0.22, color: 'bg-green-500' },
    { word: 'pelayanan', value: 0.18, color: 'bg-green-400' },
    { word: 'staf', value: 0.12, color: 'bg-green-400' },
    { word: 'ramah', value: 0.20, color: 'bg-green-500' },
    { word: 'profesional', value: 0.16, color: 'bg-green-400' },
    { word: 'Lokasi', value: 0.08, color: 'bg-green-300' },
    { word: 'strategis', value: 0.14, color: 'bg-green-400' },
    { word: 'dekat', value: 0.06, color: 'bg-green-300' },
    { word: 'pusat', value: 0.04, color: 'bg-green-300' },
    { word: 'kota', value: 0.03, color: 'bg-green-300' }
  ]

  const limeExplanation = [
    {
      feature: 'Kata: "bersih"',
      weight: 0.25,
      contribution: 'positive',
      explanation: 'Kata "bersih" memiliki kontribusi positif kuat terhadap prediksi sentimen positif'
    },
    {
      feature: 'Kata: "nyaman"',
      weight: 0.22,
      contribution: 'positive',
      explanation: 'Kata "nyaman" menunjukkan kepuasan terhadap kenyamanan hotel'
    },
    {
      feature: 'Kata: "ramah"',
      weight: 0.20,
      contribution: 'positive',
      explanation: 'Kata "ramah" mengindikasikan kepuasan terhadap pelayanan staf'
    },
    {
      feature: 'Aspek: Kebersihan',
      weight: 0.18,
      contribution: 'positive',
      explanation: 'Aspek kebersihan disebutkan dengan sentimen positif'
    },
    {
      feature: 'Aspek: Layanan',
      weight: 0.15,
      contribution: 'positive',
      explanation: 'Aspek layanan mendapat penilaian positif dari pengguna'
    }
  ]

  const featureImportance = [
    { feature: 'Kebersihan', importance: 0.85, shapValue: 0.32 },
    { feature: 'Layanan', importance: 0.78, shapValue: 0.28 },
    { feature: 'Kenyamanan', importance: 0.72, shapValue: 0.24 },
    { feature: 'Lokasi', importance: 0.65, shapValue: 0.18 },
    { feature: 'Makanan', importance: 0.58, shapValue: 0.15 }
  ]

  const currentReview = sampleReviews.find(r => r.id === selectedReview)

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Explainable AI Dashboard</h3>
            <p className="text-sm text-gray-600">Visualisasi interpretasi model dengan SHAP dan LIME</p>
          </div>
          <div className="flex gap-2">
            <select 
              value={selectedReview}
              onChange={(e) => setSelectedReview(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              {sampleReviews.map(review => (
                <option key={review.id} value={review.id}>
                  Review {review.id.split('_')[1]}
                </option>
              ))}
            </select>
            <select 
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="shap">SHAP Analysis</option>
              <option value="lime">LIME Analysis</option>
            </select>
          </div>
        </div>
      </div>

      {/* Selected Review */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ulasan Terpilih</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-900 mb-3">{currentReview?.text}</p>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentReview?.sentiment === 'POSITIF' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {currentReview?.sentiment}
            </span>
            <span className="text-sm text-gray-600">
              Confidence: {currentReview?.confidence}%
            </span>
          </div>
        </div>
      </div>

      {selectedMethod === 'shap' ? (
        <>
          {/* SHAP Values Visualization */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SHAP Values - Kontribusi Kata</h3>
            <p className="text-sm text-gray-600 mb-4">
              Visualisasi kontribusi setiap kata terhadap prediksi sentimen model
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {shapValues.map((item, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 rounded-lg text-sm font-medium text-white ${item.color}`}
                  title={`SHAP Value: ${item.value.toFixed(3)}`}
                >
                  {item.word}
                  <span className="ml-1 text-xs">({item.value.toFixed(2)})</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-600">Kontribusi Positif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span className="text-gray-600">Kontribusi Netral</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-gray-600">Kontribusi Negatif</span>
              </div>
            </div>
          </div>

          {/* Feature Importance */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Importance (SHAP)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Pentingnya setiap fitur/aspek dalam prediksi sentimen
            </p>
            <div className="space-y-3">
              {featureImportance.map((feature) => (
                <div key={feature.feature} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{feature.feature}</span>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-600">Importance: {feature.importance}</span>
                      <span className="text-blue-600">SHAP: {feature.shapValue}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full" 
                        style={{ width: `${feature.importance * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* LIME Explanation */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">LIME Explanation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Penjelasan lokal untuk prediksi pada ulasan tertentu
            </p>
            <div className="space-y-4">
              {limeExplanation.map((explanation, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">{explanation.feature}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">Weight: {explanation.weight}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          explanation.contribution === 'positive' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {explanation.contribution}
                        </span>
                      </div>
                    </div>
                    <div className="w-16 h-16 flex items-center justify-center">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          explanation.contribution === 'positive' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      >
                        {(explanation.weight * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{explanation.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LIME Local Interpretation */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Local Interpretation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Bagaimana model membuat keputusan untuk ulasan ini
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Decision Process</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                    <span className="text-sm text-gray-700">Tokenisasi dan preprocessing teks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                    <span className="text-sm text-gray-700">Ekstraksi fitur dengan RoBERTa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                    <span className="text-sm text-gray-700">Klasifikasi aspek dengan BERTopic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                    <span className="text-sm text-gray-700">Aggregasi sentimen per aspek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm text-gray-700">Prediksi sentimen final</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Model Confidence</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">BERTopic</span>
                      <span className="text-gray-900">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">RoBERTa</span>
                      <span className="text-gray-900">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">XAI Interpretation</span>
                      <span className="text-gray-900">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Model Explainability Metrics */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Explainability Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">94.2%</div>
            <p className="text-sm text-gray-600 mt-1">Interpretability Score</p>
            <p className="text-xs text-gray-500">Kemudahan interpretasi</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">89.7%</div>
            <p className="text-sm text-gray-600 mt-1">Fidelity Score</p>
            <p className="text-xs text-gray-500">Akurasi penjelasan</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">91.3%</div>
            <p className="text-sm text-gray-600 mt-1">Stability Score</p>
            <p className="text-xs text-gray-500">Konsistensi hasil</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">87.8%</div>
            <p className="text-sm text-gray-600 mt-1">Comprehensibility</p>
            <p className="text-xs text-gray-500">Kemudahan dipahami</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DataContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSentiment, setSelectedSentiment] = useState('all')
  const [selectedAspect, setSelectedAspect] = useState('all')
  const [selectedDateRange, setSelectedDateRange] = useState('7d')
  const [currentPage, setCurrentPage] = useState(1)

  const sampleData = [
    {
      id: 'review_1',
      text: 'Hotel sangat bersih dan nyaman, pelayanan staf ramah dan profesional. Lokasi strategis dekat dengan pusat kota.',
      sentiment: 'POSITIF',
      confidence: 95,
      aspects: ['Kebersihan', 'Layanan', 'Lokasi'],
      date: '2025-01-07',
      platform: 'Traveloka',
      rating: 5
    },
    {
      id: 'review_2',
      text: 'Kamar kotor dan AC tidak dingin, sangat kecewa dengan pelayanan yang lambat. Sarapan juga kurang variatif.',
      sentiment: 'NEGATIF',
      confidence: 88,
      aspects: ['Kebersihan', 'Layanan', 'Makanan'],
      date: '2025-01-07',
      platform: 'Traveloka',
      rating: 2
    },
    {
      id: 'review_3',
      text: 'Fasilitas hotel lengkap, kolam renang bersih, gym memadai. Staf sangat helpfull dan responsif.',
      sentiment: 'POSITIF',
      confidence: 92,
      aspects: ['Kenyamanan', 'Layanan'],
      date: '2025-01-06',
      platform: 'Traveloka',
      rating: 4
    },
    {
      id: 'review_4',
      text: 'Lokasi hotel mudah diakses, dekat dengan transportasi umum. Namun kebersihan kamar perlu ditingkatkan.',
      sentiment: 'NETRAL',
      confidence: 78,
      aspects: ['Lokasi', 'Kebersihan'],
      date: '2025-01-06',
      platform: 'Traveloka',
      rating: 3
    },
    {
      id: 'review_5',
      text: 'Makanan di restoran hotel sangat enak, banyak pilihan menu. Pelayanan di restoran juga cepat dan ramah.',
      sentiment: 'POSITIF',
      confidence: 90,
      aspects: ['Makanan', 'Layanan'],
      date: '2025-01-05',
      platform: 'Traveloka',
      rating: 4
    },
    {
      id: 'review_6',
      text: 'Tempat tidur nyaman dan ruangan cukup luas. Sayangnya WiFi agak lambat dan parkir terbatas.',
      sentiment: 'NETRAL',
      confidence: 75,
      aspects: ['Kenyamanan'],
      date: '2025-01-05',
      platform: 'Traveloka',
      rating: 3
    },
    {
      id: 'review_7',
      text: 'Check-in cepat dan staf sangat profesional. Kamar bersih dan fasilitas lengkap. Highly recommended!',
      sentiment: 'POSITIF',
      confidence: 96,
      aspects: ['Layanan', 'Kebersihan', 'Kenyamanan'],
      date: '2025-01-04',
      platform: 'Traveloka',
      rating: 5
    },
    {
      id: 'review_8',
      text: 'AC tidak berfungsi dengan baik dan kamar mandi bocor. Komplain tidak ditangani dengan serius.',
      sentiment: 'NEGATIF',
      confidence: 91,
      aspects: ['Kenyamanan', 'Layanan'],
      date: '2025-01-04',
      platform: 'Traveloka',
      rating: 1
    }
  ]

  // Filter data based on search and filters
  const filteredData = sampleData.filter(item => {
    const matchesSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSentiment = selectedSentiment === 'all' || item.sentiment === selectedSentiment
    const matchesAspect = selectedAspect === 'all' || item.aspects.includes(selectedAspect)
    
    return matchesSearch && matchesSentiment && matchesAspect
  })

  const itemsPerPage = 5
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'POSITIF': return 'bg-green-100 text-green-700'
      case 'NEGATIF': return 'bg-red-100 text-red-700'
      case 'NETRAL': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Manajemen Data</h3>
            <p className="text-sm text-gray-600">Kelola dan filter data ulasan hotel</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Cari ulasan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm w-48"
            />
            <select 
              value={selectedSentiment}
              onChange={(e) => setSelectedSentiment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Semua Sentimen</option>
              <option value="POSITIF">Positif</option>
              <option value="NEGATIF">Negatif</option>
              <option value="NETRAL">Netral</option>
            </select>
            <select 
              value={selectedAspect}
              onChange={(e) => setSelectedAspect(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Semua Aspek</option>
              <option value="Kebersihan">Kebersihan</option>
              <option value="Layanan">Layanan</option>
              <option value="Kenyamanan">Kenyamanan</option>
              <option value="Makanan">Makanan</option>
              <option value="Lokasi">Lokasi</option>
            </select>
            <select 
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="7d">7 Hari Terakhir</option>
              <option value="30d">30 Hari Terakhir</option>
              <option value="90d">90 Hari Terakhir</option>
            </select>
          </div>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Data</p>
              <p className="text-2xl font-bold text-gray-900">{filteredData.length}</p>
            </div>
            <Database className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Positif</p>
              <p className="text-2xl font-bold text-green-600">
                {filteredData.filter(item => item.sentiment === 'POSITIF').length}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Negatif</p>
              <p className="text-2xl font-bold text-red-600">
                {filteredData.filter(item => item.sentiment === 'NEGATIF').length}
              </p>
            </div>
            <BarChart3 className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Netral</p>
              <p className="text-2xl font-bold text-gray-600">
                {filteredData.filter(item => item.sentiment === 'NETRAL').length}
              </p>
            </div>
            <Eye className="w-8 h-8 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ulasan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sentimen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aspek
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                    <div className="truncate" title={item.text}>
                      {item.text}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.confidence}%
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {item.aspects.map((aspect, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                          {aspect}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRatingStars(item.rating)}
                      <span className="ml-1 text-sm text-gray-600">({item.rating})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(item.date).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Menampilkan {startIndex + 1} hingga {Math.min(startIndex + itemsPerPage, filteredData.length)} dari {filteredData.length} data
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-sm">
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FileText className="w-5 h-5" />
            <span>Export ke Excel</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FileText className="w-5 h-5" />
            <span>Export ke CSV</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FileText className="w-5 h-5" />
            <span>Export ke JSON</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ReportsContent() {
  const [selectedReportType, setSelectedReportType] = useState('comprehensive')
  const [selectedFormat, setSelectedFormat] = useState('pdf')
  const [selectedDateRange, setSelectedDateRange] = useState('30d')
  const [isGenerating, setIsGenerating] = useState(false)

  const reportTypes = [
    {
      id: 'comprehensive',
      name: 'Laporan Komprehensif',
      description: 'Laporan lengkap semua aspek analisis sentimen',
      icon: FileText
    },
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'Ringkasan eksekutif untuk manajemen',
      icon: TrendingUp
    },
    {
      id: 'technical',
      name: 'Laporan Teknis',
      description: 'Detail performa model dan metrik evaluasi',
      icon: Brain
    },
    {
      id: 'comparative',
      name: 'Analisis Perbandingan',
      description: 'Perbandingan periode dan kompetitor',
      icon: BarChart3
    }
  ]

  const handleGenerateReport = async () => {
    setIsGenerating(true)
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsGenerating(false)
    // In real implementation, this would trigger download
  }

  return (
    <div className="space-y-6">
      {/* Report Configuration */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Laporan</h3>
        <p className="text-sm text-gray-600 mb-6">
          Export laporan analisis dalam format PDF dan Excel
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Laporan
            </label>
            <div className="space-y-2">
              {reportTypes.map((type) => {
                const Icon = type.icon
                return (
                  <label key={type.id} className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="reportType"
                      value={type.id}
                      checked={selectedReportType === type.id}
                      onChange={(e) => setSelectedReportType(e.target.value)}
                      className="mt-1"
                    />
                    <Icon className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{type.name}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Format Output
              </label>
              <select 
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="pdf">PDF Document</option>
                <option value="excel">Excel Spreadsheet</option>
                <option value="powerpoint">PowerPoint Presentation</option>
                <option value="word">Word Document</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Periode Laporan
              </label>
              <select 
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="7d">7 Hari Terakhir</option>
                <option value="30d">30 Hari Terakhir</option>
                <option value="90d">90 Hari Terakhir</option>
                <option value="1y">1 Tahun Terakhir</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Include Sections
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Executive Summary</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Sentiment Analysis</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Aspect Breakdown</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Model Performance</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Recommendations</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating Report...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                Generate Report
              </>
            )}
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            Save Template
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Laporan Terbaru</h3>
        <div className="space-y-4">
          {[
            {
              name: 'Laporan Bulanan November 2024',
              type: 'comprehensive',
              format: 'PDF',
              date: '2025-12-01',
              size: '2.4 MB',
              status: 'completed'
            },
            {
              name: 'Executive Summary Q4 2024',
              type: 'executive',
              format: 'PowerPoint',
              date: '2025-11-30',
              size: '5.1 MB',
              status: 'completed'
            },
            {
              name: 'Analisis Kompetitif Hotel',
              type: 'comparative',
              format: 'Excel',
              date: '2025-11-28',
              size: '1.8 MB',
              status: 'completed'
            },
            {
              name: 'Technical Model Report',
              type: 'technical',
              format: 'PDF',
              date: '2025-11-25',
              size: '3.2 MB',
              status: 'completed'
            }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">{report.name}</div>
                  <div className="text-sm text-gray-600">
                    {report.type} • {report.format} • {report.size} • {new Date(report.date).toLocaleDateString('id-ID')}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  {report.status}
                </span>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <FileText className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Reports */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Jadwalkan Laporan Otomatis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frekuensi
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Harian</option>
              <option>Mingguan</option>
              <option>Bulanan</option>
              <option>Kuartalan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Penerima Email
            </label>
            <input
              type="email"
              placeholder="manager@hotel.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Setup Schedule
        </button>
      </div>
    </div>
  )
}

function InsightsContent() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d')
  const [selectedPriority, setSelectedPriority] = useState('all')

  const insights = [
    {
      id: 1,
      title: 'Perhatikan Aspek Kenyamanan',
      description: 'Sentimen negatif pada aspek kenyamanan meningkat 15% dalam 30 hari terakhir. Fokus pada peningkatan kualitas tempat tidur dan suhu ruangan.',
      priority: 'high',
      impact: 'Kepuasan tamu',
      action: 'Upgrade fasilitas kamar',
      confidence: 92,
      trend: 'increasing'
    },
    {
      id: 2,
      title: 'Lokasi sebagai Keunggulan Kompetitif',
      description: 'Aspek lokasi mendapat rating tertinggi (85%). Manfaatkan sebagai keunggulan kompetitif dalam marketing dan promosi.',
      priority: 'medium',
      impact: 'Revenue',
      action: 'Optimasi marketing',
      confidence: 88,
      trend: 'stable'
    },
    {
      id: 3,
      title: 'Optimasi Layanan Restoran',
      description: 'Analisis menunjukkan peluang peningkatan layanan restoran pagi. Implementasi training staf dapat meningkatkan kepuasan.',
      priority: 'medium',
      impact: 'Efisiensi operasional',
      action: 'Training staf',
      confidence: 85,
      trend: 'stable'
    },
    {
      id: 4,
      title: 'Model Performance Improvement',
      description: 'Model AI telah dilatih dengan 1,000 ulasan baru. Akurasi meningkat 2.3% menjadi 94.2%.',
      priority: 'low',
      impact: 'System performance',
      action: 'Monitor performance',
      confidence: 95,
      trend: 'improving'
    },
    {
      id: 5,
      title: 'Response Time Optimization',
      description: 'Waktu respons untuk keluhan kebersihan rata-rata 4.2 jam. Implementasi SLA dapat meningkatkan kepuasan tamu.',
      priority: 'high',
      impact: 'Customer satisfaction',
      action: 'Implement SLA',
      confidence: 87,
      trend: 'decreasing'
    }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return '📈'
      case 'decreasing': return '📉'
      case 'stable': return '➡️'
      case 'improving': return '⬆️'
      default: return '➡️'
    }
  }

  const filteredInsights = selectedPriority === 'all' 
    ? insights 
    : insights.filter(insight => insight.priority === selectedPriority)

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Business Insights</h3>
            <p className="text-sm text-gray-600">Rekomendasi strategis berbasis AI untuk manajemen hotel</p>
          </div>
          <div className="flex gap-2">
            <select 
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="7d">7 Hari Terakhir</option>
              <option value="30d">30 Hari Terakhir</option>
              <option value="90d">90 Hari Terakhir</option>
            </select>
            <select 
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Semua Prioritas</option>
              <option value="high">Prioritas Tinggi</option>
              <option value="medium">Prioritas Sedang</option>
              <option value="low">Prioritas Rendah</option>
            </select>
          </div>
        </div>
      </div>

      {/* Insights Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Insights</p>
              <p className="text-2xl font-bold text-gray-900">{filteredInsights.length}</p>
            </div>
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Prioritas Tinggi</p>
              <p className="text-2xl font-bold text-red-600">
                {filteredInsights.filter(i => i.priority === 'high').length}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Confidence Rata-rata</p>
              <p className="text-2xl font-bold text-green-600">
                {Math.round(filteredInsights.reduce((acc, i) => acc + i.confidence, 0) / filteredInsights.length)}%
              </p>
            </div>
            <Eye className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Action Items</p>
              <p className="text-2xl font-bold text-purple-600">{filteredInsights.length}</p>
            </div>
            <Settings className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Insights List */}
      <div className="space-y-4">
        {filteredInsights.map((insight) => (
          <div key={insight.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{insight.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(insight.priority)}`}>
                    {insight.priority.toUpperCase()}
                  </span>
                  <span className="text-lg">{getTrendIcon(insight.trend)}</span>
                </div>
                <p className="text-gray-700 mb-3">{insight.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Impact:</span>
                    <span className="font-medium text-gray-900">{insight.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Action:</span>
                    <span className="font-medium text-gray-900">{insight.action}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Confidence:</span>
                    <span className="font-medium text-gray-900">{insight.confidence}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Implement Action
              </button>
              <button className="px-4 py-2 border border-gray-300 text-sm rounded-lg hover:bg-gray-50">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 text-sm rounded-lg hover:bg-gray-50">
                Schedule Review
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Strategic Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Short-term Actions (1-3 bulan)</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Upgrade sistem AC di 20 kamar dengan rating terendah</li>
              <li>• Implementasi training kebersihan untuk staf housekeeping</li>
              <li>• Optimasi proses check-in untuk mengurangi waktu tunggu</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-medium text-purple-900 mb-2">Long-term Strategy (3-12 bulan)</h4>
            <ul className="space-y-2 text-sm text-purple-800">
              <li>• Renovasi fasilitas kamar mandi di seluruh hotel</li>
              <li>• Implementasi AI-powered customer service</li>
              <li>• Pengembangan program loyalitas berbasis sentimen analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}