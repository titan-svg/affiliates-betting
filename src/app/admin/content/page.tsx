'use client';

import { useState } from 'react';
import { Card, Button, Badge, Input } from '@/components/ui';
import { ImageIcon, CheckCircleIcon, AlertIcon } from '@/components/icons';
import { aiContent } from '@/data/mockData';

export default function AdminContentPage() {
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Content</h1>
          <p className="text-dark-400">Generate and manage AI-created visual content.</p>
        </div>
        <Button
          variant="primary"
          icon={<ImageIcon className="w-5 h-5" />}
          onClick={handleGenerate}
          disabled={generating}
        >
          {generating ? 'Generating...' : 'Generate Image'}
        </Button>
      </div>

      {/* AI Provider Card */}
      <Card dark className="bg-gradient-to-br from-secondary-900/30 to-dark-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-secondary-500/20 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-7 h-7 text-secondary-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">AI Provider: DALL-E</p>
              <p className="text-dark-300">Configured for daily image generation</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
      </Card>

      {/* Generation Settings */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6">Generation Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Daily Generation Time"
            type="time"
            defaultValue="09:00"
          />
          <Input
            label="Images Per Day"
            type="number"
            defaultValue="3"
          />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-dark-200 mb-2">
              Default Prompt Template
            </label>
            <textarea
              rows={3}
              defaultValue="Generate a high-quality promotional image for sports betting, featuring {topic}, in a modern style with vibrant colors"
              className="w-full px-4 py-3 rounded-xl border bg-dark-800 border-dark-600 text-white placeholder-dark-400 focus:border-primary-500 focus:ring-primary-500 focus:outline-none focus:ring-2 transition-all"
            />
          </div>
        </div>
        <div className="mt-6">
          <Button variant="primary">Save Settings</Button>
        </div>
      </Card>

      {/* Generated Content */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6">Generated Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiContent.map((content) => (
            <div key={content.id} className="bg-dark-700/50 rounded-xl overflow-hidden">
              <div className="h-40 bg-dark-600 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-dark-400" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-medium truncate">{content.title}</p>
                  <Badge
                    variant={
                      content.status === 'published'
                        ? 'success'
                        : content.status === 'pending'
                        ? 'warning'
                        : 'danger'
                    }
                    size="sm"
                  >
                    {content.status}
                  </Badge>
                </div>
                <p className="text-dark-400 text-sm mb-4">
                  Generated {new Date(content.generatedAt).toLocaleDateString()}
                </p>
                <div className="flex gap-2">
                  {content.status === 'pending' && (
                    <>
                      <Button variant="primary" size="sm" fullWidth>
                        Publish
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reject
                      </Button>
                    </>
                  )}
                  {content.status === 'published' && (
                    <Button variant="outline" size="sm" fullWidth>
                      View
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
