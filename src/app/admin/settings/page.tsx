'use client';

import { useState } from 'react';
import { Card, Button, Input } from '@/components/ui';
import { SettingsIcon, CheckCircleIcon } from '@/components/icons';
import { siteSettings } from '@/data/mockData';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState(siteSettings);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-dark-400">Configure your site settings and integrations.</p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
            <CheckCircleIcon className="w-5 h-5" />
            Settings saved!
          </div>
        )}
      </div>

      {/* General Settings */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-primary-400" />
          General Settings
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Site Name"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            />
            <Input
              label="Contact Email"
              type="email"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">
              Site Description
            </label>
            <textarea
              rows={3}
              value={settings.siteDescription}
              onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border bg-dark-800 border-dark-600 text-white placeholder-dark-400 focus:border-primary-500 focus:ring-primary-500 focus:outline-none focus:ring-2 transition-all"
            />
          </div>
        </div>
      </Card>

      {/* Social Links */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6">Social Media Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Twitter"
            value={settings.socialLinks.twitter || ''}
            onChange={(e) => setSettings({
              ...settings,
              socialLinks: { ...settings.socialLinks, twitter: e.target.value }
            })}
            placeholder="https://twitter.com/..."
          />
          <Input
            label="Facebook"
            value={settings.socialLinks.facebook || ''}
            onChange={(e) => setSettings({
              ...settings,
              socialLinks: { ...settings.socialLinks, facebook: e.target.value }
            })}
            placeholder="https://facebook.com/..."
          />
          <Input
            label="Instagram"
            value={settings.socialLinks.instagram || ''}
            onChange={(e) => setSettings({
              ...settings,
              socialLinks: { ...settings.socialLinks, instagram: e.target.value }
            })}
            placeholder="https://instagram.com/..."
          />
        </div>
      </Card>

      {/* Integrations */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-dark-700/50 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-medium">Email Marketing</p>
                <p className="text-dark-400 text-sm">Mailchimp</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400 text-sm">Connected</span>
              </div>
            </div>
            <Button variant="outline" size="sm" fullWidth>
              Configure
            </Button>
          </div>
          <div className="p-4 bg-dark-700/50 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-medium">AI Image Generation</p>
                <p className="text-dark-400 text-sm">DALL-E</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400 text-sm">Connected</span>
              </div>
            </div>
            <Button variant="outline" size="sm" fullWidth>
              Configure
            </Button>
          </div>
        </div>
      </Card>

      {/* API Keys */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6">API Keys</h2>
        <div className="space-y-6">
          <Input
            label="Mailchimp API Key"
            type="password"
            defaultValue="••••••••••••••••"
          />
          <Input
            label="OpenAI API Key (for DALL-E)"
            type="password"
            defaultValue="••••••••••••••••"
          />
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button variant="primary" size="lg" onClick={handleSave}>
          Save All Settings
        </Button>
      </div>
    </div>
  );
}
